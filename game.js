(() => {
    'use strict';
    const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
    const canvas = $('#game'), teams = window.ARENA_TEAMS;
    let c = canvas.getContext('2d');
    function portraitImage(...args){if(window.ArenaRenderCache)window.ArenaRenderCache.drawImage(c,...args);else c.drawImage(...args);}
    const countryFilters = ['all', 'all'];
    const originalCountries = ['İspanya', 'İspanya', 'İngiltere', 'Fransa', 'Türkiye', 'Türkiye', 'Türkiye', 'İtalya', 'Almanya', 'İngiltere', 'ABD', 'Suudi Arabistan', 'İngiltere', 'İngiltere', 'İtalya', 'İspanya'];
    const countryCodes = { 'Türkiye': 'tr', 'İngiltere': 'gb-eng', 'İspanya': 'es', 'İtalya': 'it', 'Almanya': 'de', 'Fransa': 'fr', 'Portekiz': 'pt', 'Hollanda': 'nl', 'Belçika': 'be', 'İskoçya': 'gb-sct', 'Yunanistan': 'gr', 'Avusturya': 'at', 'İsviçre': 'ch', 'Danimarka': 'dk', 'İsveç': 'se', 'Norveç': 'no', 'ABD': 'us', 'Suudi Arabistan': 'sa' };
    const teamCountry = i => teams[i].category === 'special' ? 'Özel Takımlar' : teams[i].country || originalCountries[i];
    const countries = [...new Set(teams.map((_, i) => teamCountry(i)))].sort((a, b) => a === 'Özel Takımlar' ? -1 : b === 'Özel Takımlar' ? 1 : a === 'Türkiye' ? -1 : b === 'Türkiye' ? 1 : a.localeCompare(b, 'tr'));
    let W = 1200, rewardMatchId=0, rewardEnded=false;
    const H = 660, FLOOR = 557, GRAVITY = 1450, GOAL_TOP = 257, GOAL_BOTTOM = FLOOR - 20;
    const POST_RADIUS = 4, GOAL_LINE = 57;
    const heroSize = () => 1;
    function goalTop() { return GOAL_TOP + (senSession?.rules?.goalOffset || 0); }
    function collideGoalFrame() {
        // Solid crossbar and exposed lower post; the opening between them admits goals.
        for (const side of (training ? [1] : [0, 1])) {
            for (const lowerPost of [false, true]) {
                const x = side ? clamp(ball.x, W - GOAL_LINE, W - 3) : clamp(ball.x, 3, GOAL_LINE);
                const contactX = lowerPost ? (side ? W - GOAL_LINE : GOAL_LINE) : x;
                const contactY = lowerPost ? clamp(ball.y, GOAL_BOTTOM - 24, GOAL_BOTTOM) : goalTop(side);
                const dx = ball.x - contactX, dy = ball.y - contactY;
                const distance = Math.hypot(dx, dy), radius = ball.r + POST_RADIUS;
                if (distance >= radius) continue;
                const nx = distance ? dx / distance : 0, ny = distance ? dy / distance : (ball.vy > 0 ? -1 : 1);
                ball.x = contactX + nx * (radius + .01); ball.y = contactY + ny * (radius + .01);
                const dot = ball.vx * nx + ball.vy * ny;
                if (dot < 0) {
                    ball.vx -= 1.95 * dot * nx; ball.vy -= 1.95 * dot * ny;
                    ball.fire = 0; ball.aimPath = null; ball.passenger = -1;
                    burst(ball.x, ball.y, '#fff4bf', 8); beep(820, .08, 'triangle', .06, 'post');
                }
            }
        }
    }
    function keeperPass(k) {
        if (retreat && retreat.side === k.side) return false;
        if (players.some(p => p.side !== k.side && Math.abs(p.x - k.x) < 130 && Math.abs(p.y - k.y) < 160)) return false;
        if (k.passCooldown > 0 || ball.fire > 0 || ball.passenger >= 0 || Math.hypot(ball.vx, ball.vy) > 700 || k.y < FLOOR - 5) return false;
        const dir = k.side ? -1 : 1;
        const candidates = players.filter(p => p.side === k.side && p.stun <= 0 && p.y >= FLOOR - 5 && (p.x - k.x) * dir > 120);
        candidates.sort((a, b) => Math.abs(a.x - k.x) - Math.abs(b.x - k.x));
        for (const target of candidates) {
            const startX = k.x + dir * 60, startY = FLOOR - ball.r;
            const distance = Math.abs(target.x - startX);
            if (distance > 1100) continue;
            if (distance > 360) {
                const plan = passPlan(k, target, true);
                if (!plan) continue;
                const byHand = ball.keeper === k.side;
                Object.assign(ball, plan, { lastTouchSide:k.side, owner: -1, controlLock: .3, keeper: -1, passenger: -1, fire: 0, groundPass: false, shooter: -1, superShot: false, aimPath: null, saveChecked: false });
                defensiveReset = { side: k.side, until: clock + 4 };
                k.holdTime = 0; k.passCooldown = 1.4; k.savePose = .6; k.keeperAction = byHand ? 'throw' : 'pass';
                k.kick = byHand ? 0 : KICK_DURATION; k.kickDir = dir; k.action = 'kick'; 
                label('UZUN PAS!', k.x, k.y - 165, '#94efdc'); return true;
            }
            const speed = clamp(180 + distance * .28, 210, 310);
            const blocked = players.some(p => p.side !== k.side && p.y > FLOOR - 100 &&
                (p.x - startX) * dir > -35 && (target.x - p.x) * dir > -65);
            if (blocked) continue;
            const byHand = ball.keeper === k.side;
            ball.x = startX; ball.y = byHand ? k.y - 45 : startY; ball.vx = dir * speed; ball.vy = byHand ? 110 : 0;
            ball.groundPass = true;
            ball.owner = -1; ball.controlLock = .3; defensiveReset = { side: k.side, until: clock + 4 };
            
            ball.lastTouchSide = k.side; ball.keeper = -1; k.holdTime = 0; k.savePose = byHand ? .5 : .25; k.keeperAction = byHand ? 'throw' : 'pass';
            ball.shooter = -1; ball.aimPath = null; ball.superShot = false; ball.saveChecked = false; ball.carryChecked = false; ball.fire = 0;
            k.passCooldown = 1.4; k.kick = byHand ? 0 : KICK_DURATION; k.kickDir = dir; k.action = 'kick';
            label(byHand ? 'ELLE PAS!' : 'PAS!', k.x, k.y - 165, '#94efdc'); return true;
        }
        return false;
    }
    function passPlan(p, target, loft = false) {
        const dir = Math.sign(target.x - p.x), distance = Math.abs(target.x - p.x);
        if (!dir || distance < 100 || distance > 1100 || target.stun > 0) return null;
        const opponents = players.filter(q => q.side !== p.side);
        if (opponents.some(q => Math.abs(q.x - target.x) < 80 && Math.abs(q.y - target.y) < 120)) return null;
        const x = p.x + dir * 60, y = loft ? p.y - 55 : FLOOR - ball.r;
        const flight = loft ? clamp(Math.abs(target.x - x) / 540, .65, 1.4) : clamp(distance / 260, .4, 2);
        const aim = clamp(target.x + target.vx * flight * .25, 100, W - 100);
        const vx = loft ? (aim - x) * .18 / (1 - Math.exp(-.18 * flight)) : dir * clamp(180 + distance * .28, 210, 310);
        const vy = loft ? (target.y - 45 - y - .5 * GRAVITY * flight * flight) / flight : 0;
        for (const q of opponents) for (let i = 1; i <= 12; i++) {
            const t = flight * i / 12, px = loft ? x + vx * (1 - Math.exp(-.18 * t)) / .18 : x + (aim - x) * i / 12;
            const py = loft ? y + vy * t + .5 * GRAVITY * t * t : y;
            if (Math.abs(px - q.x) < 55 && py > q.y - 150 && py < q.y + 20) return null;
        }
        return { x, y, vx, vy };
    }
    function playerPass(p) {
        if (ball.owner >= 0 && ball.owner !== p.i) return false;
        if (p.passCooldown > 0 || p.cooldown > 0 || p.stun > 0 || ball.keeper >= 0 || ball.passenger >= 0 || penalty || Math.hypot(ball.x - p.x, ball.y - (p.y - 50)) > 100) return false;
        const targets = [...players, ...keepers].filter(q => q !== p && q.side === p.side && q.stun <= 0);
        targets.sort((a, b) => Math.abs(a.x - p.x) - Math.abs(b.x - p.x));
        for (const target of targets) {
            const loft = Math.abs(target.x - p.x) > 360, plan = passPlan(p, target, loft);
            if (!plan) continue;
            Object.assign(ball, plan, { owner: -1, controlLock: .25, keeper: -1, passenger: -1, fire: 0, groundPass: !loft, shooter: p.i, superShot: false, saveChecked: false, carryChecked: false });
            p.passCooldown = 1; p.cooldown = .5; p.kick = KICK_DURATION; p.kickDir = Math.sign(plan.vx); p.kickHit = true; p.action = 'kick';
            p.kickSuper = false;  label('PAS!', p.x, p.y - 165, '#94efdc'); return true;
        }
        return false;
    }
    function updateKeeper(k, dt) {
        const dir = k.side ? -1 : 1, home = k.side ? W - 105 : 105;
        k.dir = dir;
        k.webCool=Math.max(0,(k.webCool||0)-dt);
        k.passCooldown = Math.max(0, (k.passCooldown || 0) - dt);
        k.cooldown = Math.max(0, k.cooldown - dt);
        k.kick = Math.max(0, k.kick - dt);
        k.savePose = Math.max(0, (k.savePose || 0) - dt);
        const owned = ball.keeper === k.side;
        const distance = Math.abs(ball.x - k.x), incoming = ball.vx * dir < -100;
        const nearGoal = k.side ? ball.x > W - 350 : ball.x < 350;
        const teammateOnBall = players.some(p => p.side === k.side && p.stun <= 0 &&
            Math.abs(ball.x - p.x) < 115 && ball.y > p.y - 165 && ball.y <= p.y + ball.r);
        const returning = k.passCooldown > 0 || teammateOnBall;
        const loose = !returning && nearGoal && distance < 250 && Math.abs(ball.vx) < 380 && ball.passenger < 0 && !(ball.keeper >= 0);
        const target = owned || returning ? home : loose ? ball.x - dir * 28 : home + dir * (nearGoal ? 25 : 0);
        const senKeeper = k.senLevel!==undefined ? window.ArenaSenCore.keeperConfig(k.star.overall) : null;
        const keeperQuality = senKeeper ? senKeeper.speed/152 : training ? 1 : (window.ArenaKeeperBalance?.quality(k) || 1);
        const keeperSpeed = (training ? 152 : 190) * keeperQuality;
        k.vx = clamp((target - k.x) * (training ? 4 : 5) * keeperQuality, -keeperSpeed, keeperSpeed);
        k.x = clamp(k.x + k.vx * dt, k.side ? W - 310 : 85, k.side ? W - 85 : 310);
        if(!incoming)k.incomingTime=0;else k.incomingTime=(k.incomingTime||0)+dt;
        if (!owned && incoming && k.incomingTime >= (senKeeper?senKeeper.reaction:training ? .14 : window.ArenaKeeperBalance?.reaction(k)||.14) && distance < (training ? 260 : 330 * keeperQuality) && k.y === FLOOR && k.cooldown === 0) {
            const arrival = clamp(distance / Math.abs(ball.vx), .06, .5);
            const predictedY = Math.min(FLOOR - ball.r, ball.y + ball.vy * arrival + GRAVITY * arrival * arrival * .5);
            if (predictedY > GOAL_TOP - 25 && predictedY < FLOOR - 120) {
                k.vy = -clamp(Math.sqrt(2 * GRAVITY * Math.max(25, FLOOR - 110 - predictedY)), 310, 640) * (training ? .9 : clamp(.95+(keeperQuality-1)*.35,.82,1.05));
                k.keeperAction = 'jump'; k.savePose = .75; k.cooldown = training ? 1.2 : 1 / keeperQuality;
            } else if (predictedY >= FLOOR - 120 && arrival < .32) {
                k.vy = training ? -135 : -150; k.keeperAction = 'dive'; k.savePose = .55; k.cooldown = training ? 1 : .85 / keeperQuality;
            }
        }
        k.vy += GRAVITY * dt; k.y = Math.min(FLOOR, k.y + k.vy * dt);
        if (k.y === FLOOR) k.vy = 0;
        k.walk += Math.abs(k.vx) * dt * .035;
        if (owned) {
            k.holdTime = (k.holdTime || 0) + dt;
            if (retreat && retreat.side === k.side) return;
            if (k.holdTime > .3 && k.y === FLOOR) keeperPass(k);
            // If every passing lane remains blocked, place the ball at the feet to play on.
            if (ball.keeper === k.side && k.holdTime > 2.5 && k.y === FLOOR) {
                ball.keeper = -1; ball.x = k.x + dir * 60; ball.y = k.y - 45;
                ball.vx = dir * 140; ball.vy = 110; ball.groundPass = true; k.keeperAction = 'throw'; k.savePose = .5; k.kick = 0;
                k.passCooldown = 1; k.holdTime = 0;
                ball.owner = -1; ball.controlLock = .3; defensiveReset = { side: k.side, until: clock + 4 };
            }
        }
    }
    const powerTeam = p => p.star?.powerTeam || p.team;
    const hasSpecialPowers = p => powerTeam(p)?.category === 'special';
    const isIcons = p => powerTeam(p)?.short === 'ICON' && powerTeam(p)?.name === 'ICONS TEA';
    const isBuffon = p => p.isKeeper && !p.isTrainingKeeper && isIcons(p) && p.star.realName === 'Gianluigi Buffon';
    function keeperContact(k) {
        ball.lastTouchSide = k.side;
        const shooter=players[ball.shooter];
        const incomingShot=shooter&&shooter.side!==k.side&&ball.vx*k.dir<0;
        if(incomingShot&&!ball.saveChecked){const override=adminValue(k,'save');const chance=k.senLevel!==undefined?window.ArenaSenCore.keeperConfig(k.star.overall).saveChance:override!==undefined?override/10:window.ArenaKeeperBalance?.chance(k,shooter,Math.hypot(ball.vx,ball.vy),!!ball.superShot)||.7;ball.buffonGoal=Math.random()>=chance;ball.saveChecked=true;}
        if(incomingShot&&ball.saveChecked&&ball.buffonGoal===true&&k.senLevel!==undefined){const towardGoal=k.side?1:-1;ball.x=k.x+towardGoal*65;ball.vx=towardGoal*Math.max(180,Math.abs(ball.vx)*.85);ball.keeper=-1;ball.owner=-1;k.keeperAction='dive';k.savePose=.55;k.passCooldown=.4;return true;}
        if(incomingShot&&ball.saveChecked&&ball.buffonGoal===true){if(!ball.statsSaveCounted){Insights.save(insights,k);ball.statsSaveCounted=true;}const dir=k.side?-1:1;ball.x=k.x+dir*65;ball.vx=dir*clamp(Math.abs(ball.vx)*.55,160,460);ball.vy=-120-Math.min(160,Math.abs(ball.vy)*.25);ball.fire=0;ball.aimPath=null;ball.iconsRocket=false;ball.superShot=false;ball.groundPass=false;k.keeperAction='save';k.savePose=.4;k.passCooldown=.3;return true;}
        if (ball.passenger >= 0) return false;
        if(incomingShot&&!ball.statsSaveCounted){Insights.save(insights,k);ball.statsSaveCounted=true;}
        if (k.passCooldown > 0) {
            const dir = k.side ? -1 : 1;
            ball.x = k.x + dir * 65; ball.vx = dir * clamp(Math.abs(ball.vx), 180, 420);
            ball.vy = Math.min(ball.vy, -240); ball.fire = 0; ball.groundPass = false;
            return true;
        }
        if (ball.fire <= 0 && Math.hypot(ball.vx, ball.vy) < 700) {
            if (keeperPass(k)) return true;
            ball.keeper = k.side; ball.vx = 0; ball.vy = 0; ball.fire = 0;
            if (!training && !penalty) {
                retreat = { side: k.side, remaining: 5 };
                for (const p of players) if (p.side !== k.side && p.controller < 0) p.ignoreRetreat = Math.random() < .06;
            }
            k.holdTime = 0; k.keeperAction = 'catch'; k.savePose = .6;
            label('KONTROL!', k.x, k.y - 165, '#94efdc'); return true;
        }
        const dir = k.side ? -1 : 1;
        ball.x = k.x + dir * 65; ball.vx = dir * clamp(Math.abs(ball.vx) * .45, 180, 420);
        ball.vy = -240; ball.fire = 0; ball.groundPass = false;
        k.keeperAction = 'save'; k.savePose = .5; k.passCooldown = .45;
        label('KURTARIŞ!', k.x, k.y - 165, '#94efdc'); return true;
    }
    function keeperParts(k) {
        const parts = [{x:k.x,y:k.y-140,r:25},{x:k.x,y:k.y-96,r:36},{x:k.x,y:k.y-29,r:24}];
        if (k.savePose > 0) parts.unshift({x:k.x+k.dir*(k.keeperAction==='dive'?58:30),y:k.y-(k.keeperAction==='dive'?65:115),r:22});
        return parts;
    }
    function solidKeeperContact(k) {
        if (ball.keeper >= 0 || ball.owner >= 0) return false;
        for (const part of keeperParts(k)) {
            const dx=ball.x-part.x,dy=ball.y-part.y,distance=Math.hypot(dx,dy),radius=ball.r+part.r;
            if (distance >= radius) continue;
            if(ball.passenger>=0){ball.passenger=-1;ball.carryChecked=true;}
            ball.aimPath=null; ball.iconsRocket=false;
            if (keeperContact(k)) return true;
            // A missed save can still hit a solid body; it never makes a goalkeeper intangible.
            const nx=distance?dx/distance:k.dir,ny=distance?dy/distance:0;
            ball.x=part.x+nx*(radius+.5);ball.y=part.y+ny*(radius+.5);
            const dot=(ball.vx-k.vx)*nx+(ball.vy-k.vy)*ny;
            if(dot<0){ball.vx-=1.65*dot*nx;ball.vy-=1.65*dot*ny;}
            ball.groundPass=false; return true;
        }
        return false;
    }
    function scoreBallAtGoal() {
        if (ball.y+ball.r > GOAL_BOTTOM) return false;
        if (!training && ball.y-ball.r > goalTop(0)+POST_RADIUS && ball.x+ball.r < GOAL_LINE-POST_RADIUS) {goal(1);return true;}
        if (ball.y-ball.r > goalTop(1)+POST_RADIUS && ball.x-ball.r > W-GOAL_LINE+POST_RADIUS) {goal(0);return true;}
        return false;
    }
    const KICK_DURATION = .44, HIT_TIME = .12, STUN_DURATION = 1.65;
    const PLAYER_VISUAL_SCALE = .9;
    const selection = [{ team: 0, player: 0, reserve: 1 }, { team: 1, player: 0, reserve: 1 }];
    let partyMatch=null,partyLocal=[],partyInputs=new Map(),senSession=null;
    const Insights=window.ArenaMatchInsights;let insights=Insights.create();
    function matchReport(){return Insights.report(insights,players,shots,shootout?.done?shootout.score:score);}
    const partyCodes=[['KeyA','KeyD','KeyW','KeyS','KeyV','KeyB','KeyF','KeyR'],['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyL','KeyJ','KeyO']];
    function partyControls(p){const local=partyLocal.indexOf(p.controller);if(local>=0){const k=partyCodes[local];return {left:!!keys[k[0]],right:!!keys[k[1]],up:!!keys[k[2]],down:!!keys[k[3]],jump:pressed.has(k[2]),slide:pressed.has(k[3]),kick:pressed.has(k[4]),super:pressed.has(k[5]),pass:pressed.has(k[6]),sub:pressed.has(k[7])};}const packet=partyInputs.get(p.controller);if(!packet||Date.now()-packet.time>500)return {};const result={};for(const a of packet.held)result[a]=true;for(const a of packet.pressed)result[a]=true;packet.pressed.clear();return result;}
    function ownsSide(side){return !partyMatch||partyMatch.seats.some(s=>s.side===side&&partyLocal.includes(s.controller));}
    let mode = 'ai', competition = 'friendly', training = false, keepers = [], benches = [[], []], state = 'menu', helpReturn = 'menu';
    let matchDuration = 90, extraDuration = 30;
    let drawnSuper = null;
    let trainingDrawnSuper = false;
    let players = [], ball, score = [0, 0], time = 90, goalWait = 0;
    let retreat = null, penalty = null, defensiveReset = null;
    let corners = [0, 0]; // Corners conceded by each defending team; three give the opponent a penalty.
    let goalKick = null, matchLight = 'night', trainingPartner = 'cpu';
    let pendingSubs = new Map(), playerCondition = new Map(), matchEvents = [];
    let withdrawn = [new Set(), new Set()];
    let menuPaintPending = true;
    let device = 'pc';
    const gamepadKeys = new Set();
    const gamepadMenuButtons = new Set();
    let gamepadResumeHeld = false;
    let setupStep = 0, setupFocus = 0, setupStickDirection = '', setupStickNext = 0;
    function setupSteps() {
        const steps = [{ kind: 'settings', label: 'Oyun modunu ve maç ayarlarını seç' }, { kind: 'team', side: 0, label: '1. takımı seç' }];
        const opponent = competition === 'friendly';
        if (opponent) steps.push({ kind: 'team', side: 1, label: '2. takımı seç' });
        for (const side of (opponent ? [0, 1] : [0])) {
            steps.push({ kind: 'player', side, label: (side + 1) + '. takımın ilk saha oyuncusunu seç' });
            if (teamMode() || competition === 'training') steps.push({ kind: 'partner', side, label: (side + 1) + '. takımın ikinci saha oyuncusunu seç' });
            steps.push({ kind: 'reserve', side, label: (side + 1) + '. takımın yedeğini seç' });
        }
        if (competition === 'training' && teams[selection[0].team].category === 'special') steps.push({kind:'training-super',label:'Çizgi ile süper şut olsun mu?'});
        steps.push({ kind: 'ready', label: 'Takımlar hazır · Maça başlayabilirsin' });
        return steps;
    }
    function setupTargets() {
        const step = setupSteps()[setupStep];
        let targets;
        if (step.kind === 'settings') targets = [$('#competition'), $('#match-light'), ...$$('[data-mode]:not(.hidden)')];
        else if (step.kind === 'team') targets = [...$$(`#countries-${step.side} [data-country]`), ...$$(`#teams-${step.side} [data-team]:not(.hidden)`)];
        else if (step.kind === 'player') targets = $$(`#roster-${step.side} [data-player]`);
        else if (step.kind === 'partner') targets = $$(`[data-partner="${step.side}"]`);
        else if (step.kind === 'reserve') targets = $$(`[data-reserve-side="${step.side}"]`);
        else if (step.kind === 'training-super') targets = [$('#training-drawn-super')];
        else targets = [$('#start')];
        return [...targets, $('#setup-next'), $('#setup-prev'), $('#back')].filter(el => el && !el.disabled && !el.classList.contains?.('hidden'));
    }
    function focusSetupTarget(scroll = false) {
        $$('.gamepad-focus').forEach(el => el.classList.remove('gamepad-focus'));
        const targets = setupTargets(); setupFocus = clamp(setupFocus, 0, Math.max(0, targets.length - 1));
        const target = targets[setupFocus];
        if (device === 'ps5' && target) {
            target.classList.add('gamepad-focus'); target.focus?.({ preventScroll: true });
            if (scroll) target.scrollIntoView?.({ block: 'nearest', inline: 'center', behavior: 'instant' });
        }
    }
    function renderSetupWizard(scroll = false) {
        if (state !== 'setup') return;
        const steps = setupSteps(); setupStep = clamp(setupStep, 0, steps.length - 1);
        const step = steps[setupStep];
        $('#setup-step-count').textContent = 'ADIM ' + (setupStep + 1) + ' / ' + steps.length;
        $('#setup-step-title').textContent = step.label;
        $('#setup-prev').disabled = setupStep === 0;
        $('#setup-next').classList.toggle('hidden', step.kind === 'ready');
        const group = (elements, active) => elements.filter(Boolean).forEach(el => { el.classList.toggle('setup-dimmed', !active); el.inert = !active; });
        group([$('.competition-options'), $('.mode-select')], step.kind === 'settings');
        for (const side of [0, 1]) {
            group([$('#teams-' + side).closest?.('.team-carousel')], step.kind === 'team' && step.side === side);
            group([$('#roster-' + side), $('#roster-' + side).previousElementSibling], step.kind === 'player' && step.side === side);
            group([$('#partner-pick-' + side)], step.kind === 'partner' && step.side === side);
            group([$('#reserve-pick-' + side)], step.kind === 'reserve' && step.side === side);
        }
        group([$('#start'), $('#versus')], step.kind === 'ready');
        const trainingChoice = $('#training-super-choice');
        const showTrainingChoice = competition === 'training' && teams[selection[0].team].category === 'special';
        trainingChoice?.classList.toggle('hidden', !showTrainingChoice);
        group([trainingChoice], step.kind === 'training-super');
        if (step.kind === 'training-super' && scroll) trainingChoice?.scrollIntoView?.({block:'center',behavior:reducedMotion?'instant':'smooth'});
        $('#start').disabled = step.kind !== 'ready';
        focusSetupTarget(scroll);
    }
    function advanceSetup(direction = 1) {
        setupStep = clamp(setupStep + direction, 0, setupSteps().length - 1); setupFocus = 0;
        const step = setupSteps()[setupStep];
        if (step.kind === 'team') setupFocus = $$(`#countries-${step.side} [data-country]`).length + availableTeams(step.side).indexOf(selection[step.side].team);
        if (step.kind === 'player') setupFocus = selection[step.side].player;
        renderSetupWizard(true);
    }
    function navigateSetup(direction) {
        const targets = setupTargets(), target = targets[setupFocus], step = setupSteps()[setupStep];
        if (!targets.length) return;
        const horizontal = direction === 'left' || direction === 'right', delta = direction === 'left' || direction === 'up' ? -1 : 1;
        if (step.kind === 'team' && !horizontal && (target?.dataset.team !== undefined || target?.dataset.country !== undefined)) {
            const flags = $$(`#countries-${step.side} [data-country]`);
            setupFocus = target.dataset.team !== undefined ? flags.findIndex(el => el.dataset.country === countryFilters[step.side]) : flags.length + availableTeams(step.side).indexOf(selection[step.side].team);
            focusSetupTarget(true); return;
        }
        if (target?.tagName === 'SELECT' && (step.kind !== 'settings' || horizontal)) {
            const options = [...target.options].filter(o => !o.disabled);
            const current = options.findIndex(o => o.value === target.value);
            target.value = options[(current + delta + options.length) % options.length].value;
            target.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            setupFocus = (setupFocus + delta + targets.length) % targets.length;
            focusSetupTarget(true);
        }
    }
    function confirmSetup() {
        const target = setupTargets()[setupFocus], step = setupSteps()[setupStep];
        if (!target) return;
        if (target.tagName === 'SELECT') advanceSetup();
        else if (step.kind === 'settings') { target.click(); focusSetupTarget(); }
        else target.click();
    }
    function applyDeviceRules() {
        $$('[data-mode]').forEach(b=>{b.classList.toggle('selected',b.dataset.mode===mode);b.setAttribute('aria-pressed',String(b.dataset.mode===mode));});
        $('#training-partner').disabled=$('#training-size').value==='solo';
    }
    function pollGamepad() { if(!window.ArenaOpening?.device||window.ArenaOpening.device==='ps5')window.ArenaPad?.poll(); }
    let shotEffects = [];
    let tournament = null, suddenDeath = false, ceremonyTime = 0;
    let matchPhase = 'regular', shootout = null;
    const trophyImage = new Image(); trophyImage.src = 'assets/fiction/cup.svg';
    function showBracket() {
        $('#ucl-tree').innerHTML = tournament.markup();
        $('#ucl-stage').textContent = tournament.finished ? 'UCL · TURNUVAYA VEDA' : 'UCL · ' + tournament.label();
        $('#ucl-next').classList.toggle('hidden', tournament.finished);
        screen('bracket');
    }
    function nextCupMatch() {
        if (!tournament || tournament.finished) return;
        selection[1] = { team: tournament.opponent, player: 0, partner: 1, reserve: 2 };
        suddenDeath = false; start(); $('#match-label').textContent = 'UCL · ' + tournament.label();
        // Measure after the bracket overlay and its layout have been removed.
        resizeCanvas(); draw();
        if (!document.fullscreenElement) canvas.scrollIntoView?.({block:'center',inline:'nearest',behavior:'instant'});
    }
    function shootoutTaker(side) {
        const team = teams[selection[side].team];
        const order = (senSession ? [...team.players] : [...team.players, team.keeper, team.coach]).filter(Boolean);
        const star = order[shootout.attempts[side] % order.length];
        const active = [...players, ...keepers].find(p => p.side === side && p.star === star);
        const base = players.find(p => p.side === side);
        const controller = active && active.controller >= 0 ? active.controller : players.find(p => p.side === side && p.controller >= 0)?.controller ?? -1;
        return {...base, star, controller, isCoach:star === team.coach, isKeeper:star === team.keeper, team:star === team.keeper ? keepers.find(k=>k.side===side).team : team};
    }
    function awardPenalty(side) {
        ball.owner = -1; ball.controlLock = 0;
        retreat = null;
        const taker = shootout ? shootoutTaker(side) : players.find(p => p.side === side && p.controller >= 0) || players.find(p => p.side === side);
        const dir = side ? -1 : 1;
        penalty = { side, taker, elapsed: 0, shot: false, aim: { x: .5, y: .5 }, keeperGuess: .15 + Math.random() * .7 };
        penalty.keeperController = players.find(p => p.side !== side && p.controller >= 0)?.controller ?? -1;
        if (penalty.keeperController >= 0) penalty.keeperGuess = .5;
        for (const p of [...players, ...keepers]) { p.vx = 0; p.vy = 0; p.y = FLOOR; p.kick = 0; p.stun = 0; }
        players.forEach((p, i) => p.x = W / 2 + (i - 1.5) * 85);
        keepers.forEach(k => { k.x = k.side ? W - 105 : 105; k.passCooldown = 0; k.cooldown = 0; });
        ball.keeper = -1; ball.passenger = -1; ball.fire = 0; ball.vx = 0; ball.vy = 0;
        ball.x = side ? 320 : W - 320; ball.y = FLOOR - ball.r; ball.groundPass = false;
        taker.x = ball.x - dir * 48; taker.dir = dir;
        Object.assign(taker, {y:FLOOR,vx:0,vy:0,kick:0,kickDir:dir,action:'kick',kickHit:false,kickSuper:false,slide:0,stun:0,savePose:0,keeperAction:'',celebrating:false});
        announcement = 'PENALTI!'; announceTime = 1.2;
        applyPendingSubs(); renderBench();
    }
    function finishPenalty(scored) {
        const side = penalty.side; penalty = null;
        if (shootout) {
            shootout.attempts[side]++;
            if (scored) { Insights.goal(insights,players.find(p=>p.side===side),side);shootout.score[side]++; window.ArenaCrowd?.goal(); }
            shootout.history[side].push(scored);
            const [a, b] = shootout.attempts, [x, y] = shootout.score;
            const decided = a <= 5 && b <= 5 && (x > y + 5 - b || y > x + 5 - a) || a >= 5 && a === b && x !== y;
            announcement = scored ? 'PENALTI GOL!' : 'KALECİ KURTARDI!'; announceTime = 1.2;
            shootout.done = decided; shootout.nextSide = 1 - side; shootout.wait = 1.4;
            return;
        }
        if (training) {
            if (scored) score[side]++;
            goalWait = 1.6; announcement = scored ? 'PENALTI GOL!' : 'KALECİ KURTARDI!'; announceTime = 1.6;
            renderBench(); return;
        }
        if (scored) goal(side, 'penalty');
        else { goalWait = 0; announcement = 'KALECİ KURTARDI!'; announceTime = 1.2; }
    }
    function penaltyGoalRect() { return { x: penalty?.side ? 3 : W - GOAL_LINE, y: GOAL_TOP + 24, w: GOAL_LINE - 3, h: GOAL_BOTTOM - GOAL_TOP - 48 }; }
    function shootPenalty(x, y) {
        const p = penalty;
        if (!p || p.shot || p.elapsed < .7) return false;
        p.aim = { x: .5, y: clamp(y, 0, 1) }; p.target = { ...p.aim };
        const g = penaltyGoalRect();
        p.start = { x: ball.x, y: ball.y };
        p.end = { x: p.side ? GOAL_LINE - 20 : W - GOAL_LINE + 20, y: g.y + g.h * p.target.y };
        p.duration = .55; p.shot = true; p.elapsed = 0; ball.shooter = p.taker.i;
        Object.assign(p.taker, {kick:KICK_DURATION,kickDir:p.side ? -1 : 1,action:'kick',kickHit:false,kickSuper:false,slide:0}); Insights.shot(insights,p.taker,false,{x:p.start.x,vx:(p.end.x-p.start.x)/p.duration,vy:(p.end.y-p.start.y)/p.duration},W);ball.statsSaveCounted=false;shots[p.side]++;
        beep(360, .12, 'triangle', .06, 'shot'); return true;
    }
    function updatePenalty(dt) {
        const p = penalty; p.elapsed += dt;
        const keeper = keepers.find(k => k.side !== p.side), g = penaltyGoalRect();
        if (p.rebound) {
            ball.x += ball.vx * dt; ball.y += ball.vy * dt; ball.vy += GRAVITY * dt; ball.spin += dt * 14;
            if (ball.y > FLOOR - ball.r) { ball.y = FLOOR - ball.r; ball.vy = -Math.abs(ball.vy) * .65; }
            if (p.elapsed >= .8) finishPenalty(false);
            pressed.clear(); return;
        }
        if (!p.shot) {
            const first = p.taker.controller === 0;
            if(partyMatch){if(p.keeperController>=0){const defending=partyControls({controller:p.keeperController});p.keeperGuess=clamp(p.keeperGuess+((defending.down?1:0)-(defending.up?1:0))*dt*.8,0,1);}if(p.taker.controller<0){if(p.elapsed>1.1)shootPenalty(.5,.1+Math.random()*.8);}else{const attacking=partyControls(p.taker);p.aim.y=clamp(p.aim.y+((attacking.down?1:0)-(attacking.up?1:0))*dt*.8,0,1);if(attacking.kick||attacking.super)shootPenalty(.5,p.aim.y);}pressed.clear();return;}
            if (p.keeperController >= 0) {
                const up = p.keeperController === 0 ? 'KeyW' : 'ArrowUp', down = p.keeperController === 0 ? 'KeyS' : 'ArrowDown';
                p.keeperGuess = clamp(p.keeperGuess + ((keys[down] ? 1 : 0) - (keys[up] ? 1 : 0)) * dt * .8, 0, 1);
            }
            if (p.taker.controller < 0 && p.elapsed > (p.keeperController >= 0 ? 2.5 : .95)) shootPenalty(.5, .1 + Math.random() * .8);
            else if (p.taker.controller >= 0) {
                p.aim.y = clamp(p.aim.y + ((keys[first ? 'KeyS' : 'ArrowDown'] ? 1 : 0) - (keys[first ? 'KeyW' : 'ArrowUp'] ? 1 : 0)) * dt * .8, 0, 1);
                if (pressed.has(first ? 'KeyV' : 'KeyK') || pressed.has(first ? 'KeyB' : 'KeyL')) shootPenalty(.5, p.aim.y);
            }
        } else {
            const progress = clamp((p.elapsed - HIT_TIME) / (p.duration - HIT_TIME), 0, 1);
            if (!p.taker.kickHit && p.elapsed >= HIT_TIME) { p.taker.kickHit = true; burst(ball.x, ball.y, '#e9f6ff', 12); }
            ball.x = p.start.x + (p.end.x - p.start.x) * progress;
            ball.y = p.start.y + (p.end.y - p.start.y) * progress;
            ball.spin += dt * 14; p.taker.kick = Math.max(0, p.taker.kick - dt);
            // Commit to a height chosen before the shot, without reading the target.
            if (keeper && p.elapsed > .18) {
                const targetY = Math.min(FLOOR, g.y + g.h * p.keeperGuess + 95);
                keeper.y += clamp(targetY - keeper.y, -900 * dt, 900 * dt);
                keeper.savePose = .5; keeper.keeperAction = 'save';
            }
            const contactX = keeper ? keeper.x + (p.side ? -1 : 1) * 32 : 0;
            const reachedKeeper = keeper && (p.side ? ball.x <= contactX : ball.x >= contactX);
            if (reachedKeeper && Math.abs(p.target.y - p.keeperGuess) < (training ? .11 : window.ArenaKeeperBalance?.penaltyReach(keeper,p.taker)||.125)) {
                ball.x = contactX; ball.vx = (p.side ? 1 : -1) * 650;
                ball.vy = -180 + (p.target.y - p.keeperGuess) * 900;
                ball.owner = ball.keeper = ball.passenger = -1; ball.fire = 0;
                Insights.save(insights,keeper);p.rebound = true; p.elapsed = 0;
                keeper.keeperAction = 'save'; keeper.savePose = .8;
                burst(ball.x, ball.y, '#8ceaff', 16); announcement = 'KALECİ KURTARDI!'; announceTime = 1.2;
            } else if (progress >= 1) finishPenalty(true);
        }
        pressed.clear();
    }
    let announcement = '', announceTime = 0, shake = 0, clock = 0, last = 0, accumulator = 0;
    let particles = [], trail = [], labels = [], keys = {}, pressed = new Set();
    let sound = true, audio = null, shots = [0, 0], knockdowns = [0, 0];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const portraitAtlas = new Image();
    portraitAtlas.src = 'assets/player-heads.png';
    const correctedPortraits = new Image();
    correctedPortraits.src = 'assets/player-heads-corrected.png';
    const correctedCells = { 9: 0, 6: 1, 7: 2, 3: 3 };
    const crestNames = ['barcelona', 'real-madrid', 'man-city', 'psg', 'galatasaray', 'fenerbahce', 'besiktas', 'milan'];
    const crestImages = teams.map((team, i) => { team.crest ||= `assets/crests/${crestNames[i]}.png`; const img = new Image(); img.src = team.crest; team.crestImage = img; return img; });
    let goalWinner = -1, celebration = null;
    function eligibleTeam(i, side) {
        if (competition === 'ucl') return teams[i].category !== 'special';
        if (competition === 'training' || side === 0) return true;
        return (teams[i].category === 'special') === (teams[selection[0].team].category === 'special');
    }
    const teamCollator = new Intl.Collator('tr', {sensitivity:'base',numeric:true});
    let sortedTeamIndices = [], sortedTeamCount = -1;
    function availableTeams(side) {
        if (sortedTeamCount !== teams.length) {
            sortedTeamIndices=teams.map((_,i)=>i).filter(i=>!teams[i].draftTeam).sort((a,b)=>teamCollator.compare(teams[a].name,teams[b].name)||a-b);
            sortedTeamCount=teams.length;
        }
        return side===undefined?sortedTeamIndices:sortedTeamIndices.filter(i=>eligibleTeam(i,side)&&(countryFilters[side]==='all'||teamCountry(i)===countryFilters[side]));
    }
    function normalizeTeams() {
        if(senSession)return;
        for (let side = 0; side < 2; side++) {
            if (!availableTeams(side).length) countryFilters[side] = 'all';
            if (!eligibleTeam(selection[side].team, side)) {
                selection[side] = { team: availableTeams(side)[0], player: 0, partner: 1 };
            }
        }
    }
    function syncBench() { for (const p of players) { p.reserve = benches[p.side][0] || null; p.substituted = !p.reserve; } }
    // The generated sheet has slightly uneven row gutters; exclude adjacent hair tips.
    const portraitRows = [[0, 316], [316, 300], [616, 305], [921, 333]];
    const gameAtlases = new Map();
    function getAtlas(sheet) {
        if(!sheet)return null;
        let image=gameAtlases.get(sheet);
        if(!image){image=new Image();image.decoding='async';image.addEventListener?.('load',()=>{menuPaintPending=true;});image.src=sheet;gameAtlases.set(sheet,image);}
        return image;
    }
    const trainingHead = new Image(); trainingHead.src = 'assets/training-keeper-head.png';
    gameAtlases.set('assets/training-keeper-head.png', trainingHead);
    function coachPortrait(data) {
        if (!data.head) return '';
        const [x, y, width, height] = data.head.crop;
        return '<span class="coach-head' + (data.head.roundHead ? ' round-portrait' : '') + '" role="img" aria-label="' + data.name +
            '" style="background-image:url(' + data.head.sheet + ');background-size:' +
            (100 / width) + '% ' + (100 / height) + '%;background-position:' +
            (width === 1 ? 50 : x / (1 - width) * 100) + '% ' + (height === 1 ? 50 : y / (1 - height) * 100) + '%"></span>';
    }
    function portraitMarkup(player) {
        if (player.gamePortrait) {
            const { sheet, cell, columns, rows } = player.gamePortrait;
            if (player.gamePortrait.crop) {
                const [x,y,w,h]=player.gamePortrait.crop;
                return `<span class="portrait game-portrait round-portrait" role="img" aria-label="${player.name}" style="background-image:url('${sheet}');background-size:${100/w}% ${100/h}%;background-position:${x/(1-w)*100}% ${y/(1-h)*100}%"></span>`;
            }
            if (player.gamePortrait.circleHead) return `<span class="portrait game-portrait round-portrait" role="img" aria-label="${player.name}" style="background-image:url('${sheet}');background-size:contain;background-position:center;background-repeat:no-repeat"></span>`;
            if (columns === 1 && rows === 1) return `<span class="portrait game-portrait individual-portrait" role="img" aria-label="${player.name}" style="background-image:url('${sheet}');background-size:100% auto;background-position:center top"></span>`;
            return `<span class="portrait game-portrait" role="img" aria-label="${player.name}" style="background-image:url('${sheet}');background-size:${columns * 100}% ${rows * 100}%;background-position:${columns > 1 ? cell % columns * 100 / (columns - 1) : 0}% ${rows > 1 ? Math.floor(cell / columns) * 100 / (rows - 1) : 0}%"></span>`;
        }
        if (player.portrait < 0) return '<span class="portrait initials">' + player.name.split(' ').map(n => n[0]).slice(0, 2).join('') + '</span>';
        const index = player.portrait;
        if (Object.hasOwn(correctedCells, index)) {
            const cell = correctedCells[index];
            return `<span class="portrait" aria-hidden="true" style="background-image:url('assets/player-heads-corrected.png');background-size:200% 200%;background-position:${cell % 2 * 100}% ${Math.floor(cell / 2) * 100}%"></span>`;
        }
        const [top, height] = portraitRows[Math.floor(index / 4)];
        return `<span class="portrait" aria-hidden="true" style="background-size:400% ${1254 / height * 100}%;background-position:${(index % 4) * 100 / 3}% ${top / (1254 - height) * 100}%"></span>`;
    }

    function beep(freq = 440, duration = .1, type = 'sine', volume = .06, channel = 'menu') {
        if (!sound || training) return;
        try {
            audio ??= new (window.AudioContext || window.webkitAudioContext)();
            if (audio.state === 'suspended') audio.resume().catch(() => {});
            const o = audio.createOscillator(), gain = audio.createGain();
            o.type = type; o.frequency.setValueAtTime(freq, audio.currentTime);
            o.frequency.exponentialRampToValueAtTime(Math.max(35, freq * .45), audio.currentTime + duration);
            gain.gain.setValueAtTime(volume * .25, audio.currentTime);
            gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
            o.connect(gain); if(window.ArenaAudio)ArenaAudio.connect(audio,gain,channel);else gain.connect(audio.destination); o.start(); o.stop(audio.currentTime + duration);
        } catch { /* Audio is optional when the browser blocks playback. */ }
    }

    const teamMode = () => partyMatch ? [0,1].some(side=>partyMatch.seats.filter(s=>s.side===side).length>1) : mode === 'coop' || mode === 'ai-team';
    const benchPlayer = panel => partyMatch ? players.find(p=>p.controller===partyLocal[panel]&&p.controller>=0) : training ? players[panel] : mode === 'ai-team' ? players[panel * 2] : mode === 'coop' ? players.find(p => p.controller === panel) : players[panel];
    function makePlayer(i) {
        const side = i % 2, choice = selection[side], team = teams[choice.team];
        const partner = choice.partner !== undefined && choice.partner !== choice.player ? choice.partner : team.players.findIndex((_, n) => n !== choice.player);
        const active = i < 2 ? choice.player : partner;
        const controller = mode === 'ai-team' ? (i === 0 ? 0 : -1) : mode === 'coop' ? (side === 0 ? (i === 0 ? 0 : 1) : -1) : (side === 1 && mode === 'ai' ? -1 : side);
        return {
            i, side, controller, x: side === 0 ? (i < 2 ? W * .28 : W * .43) : (i < 2 ? W * .72 : W * .57), y: FLOOR, vx: 0, vy: 0, dir: side === 0 ? 1 : -1, team,
            star: team.players[active], power: 1, walk: 0, kick: 0, kickDir: 1, kickHit: false,
            kickSuper: false, cooldown: 0, slide: 0, slideCool: 0, stun: 0, immune: 0, hitFlash: 0,
            jumps: 0, jumpHeld: false, action: 'kick', health: 100, injury: 0,
            reserve: null, substituted: false
        };
    }
    function resetPositions() {
        celebration = null;
        drawnSuper = null; if (canvas.style) canvas.style.cursor = '';
        defensiveReset = null;
        retreat = null; penalty = null; goalKick = null;
        W = !training && (partyMatch || teamMode() || mode === 'local') ? 2400 : 1960;
        resizeCanvas();
        goalWinner = -1;
        players = teamMode() ? [makePlayer(0), makePlayer(1), makePlayer(2), makePlayer(3)] : [makePlayer(0), makePlayer(1)];
        if(partyMatch&&!training){const counts=[0,0];players=partyMatch.seats.map((seat,i)=>{const order=counts[seat.side]++;return {...makePlayer(seat.side+order*2),i,controller:seat.cpu?-1:seat.controller,partyName:seat.name||('P'+(seat.controller+1))};});}
        if (training) {
            const team = teams[selection[0].team], eligible = team.players.filter(star => !withdrawn[0].has(star));
            const chosen = eligible.includes(team.players[selection[0].player]) ? team.players[selection[0].player] : eligible[0];
            const partner = eligible.includes(team.players[selection[0].partner]) && team.players[selection[0].partner] !== chosen ? team.players[selection[0].partner] : eligible.find(star => star !== chosen);
            if (!partner) { $('#training-size').value = 'solo'; $('#training-partner').disabled = true; }
            players = ($('#training-size').value === 'solo' || !partner ? [chosen] : [chosen, partner]).map((star, i) => ({
                ...makePlayer(0), i, side: 0, controller: i === 0 ? 0 : trainingPartner === 'human' ? 1 : -1, star,
                x: W * .3 + i * 260
            }));
        }
        if (!training && senSession?.cpuSides) for (const p of players) if (senSession.cpuSides.includes(p.side)) p.controller = -1;
        benches = selection.map((choice, side) => teams[choice.team].players.filter(star => !withdrawn[side].has(star) && !players.some(p => p.side === side && p.star === star)).sort((a, b) => (a === teams[choice.team].players[choice.reserve] ? -1 : 0) - (b === teams[choice.team].players[choice.reserve] ? -1 : 0)));
        syncBench();
        keepers = [0, 1].map(side => ({ ...makePlayer(side), i: players.length + side, side, isKeeper: true, controller: -1, x: side ? W - 105 : 105, y: FLOOR, star: teams[selection[side].team].keeper, team: { ...teams[selection[side].team], kit: { ...teams[selection[side].team].keeperKit } } }));
        if (training) {
            keepers = keepers.filter(p => p.side === 1);
            const k = keepers[0];
            k.isTrainingKeeper = true;
            k.star = { ...k.star, name: 'Antrenman kalecisi', portrait: -1, gamePortrait: { sheet: 'assets/training-keeper-head.png', cell: 0, columns: 1, rows: 1 }, skin: '#c38e70', hair: '#483c30' };
            k.team = { ...k.team, crestImage: null, kit: { pattern: 'white', shirt: '#558c87', stripe: '#558c87', trim: '#558c87', shorts: '#345675', shortTrim: '#345675', socks: '#dddfe1', collar: '#3f716c', sponsor: 'none', brand: 'none', casual: true, longSleeves: false } };
        }
        ball = { x: W / 2, y: 260, vx: 0, vy: 0, r: 17, spin: 0, fire: 0, shooter: -1, carryChecked: false, passenger: -1, owner: -1, controlLock: 0 }; trail = [];
        if(senSession&&training)window.ArenaSenEngine?.rating(senSession.profiles[0].rating);
    }
    function syncAudio(next) {
        window.ArenaCrowd?.set(sound && !training && next === 'playing', sound, next !== 'paused');
    }
    function screen(next) {
        state = next; keys = {}; pressed.clear(); menuPaintPending = true;
        syncAudio(next);
        for (const id of ['menu', 'setup', 'paused', 'result', 'help', 'bracket', 'draw-choice']) $('#' + id).classList.toggle('hidden', id !== next);
        $('#ceremony-controls').classList.toggle('hidden', next !== 'ceremony');
        const match = ['playing', 'paused', 'result', 'ceremony', 'bracket', 'draw-choice'].includes(next) || next === 'help' && ['playing', 'paused'].includes(helpReturn);
        $('.game-wrap').classList.toggle('in-match', match);
        $('.game-wrap').classList.toggle('in-bracket', next === 'bracket');
        $('#pause').disabled = !['playing', 'paused'].includes(next);
        $('#bench-bar').classList.toggle('hidden', !match || next === 'bracket' || next === 'ceremony'); $('#training-tools').classList.toggle('hidden', !training || !match); renderBench();
        renderMatchEvents(); renderRestartTools();
    }
    function home() { partyMatch=null;partyLocal=[];partyInputs.clear();window.ArenaOnline?.leave();selection.forEach((v,i)=>{if(teams[v.team]?.draftTeam)selection[i]={team:i,player:0,reserve:1};}); for (const choice of selection) { if(!teams[choice.team])choice.team=0; const squad = teams[choice.team].players; if (!squad[choice.player]) choice.player = 0; if (!squad[choice.partner] || choice.partner === choice.player) choice.partner = squad.findIndex((_,i)=>i!==choice.player); if (!squad[choice.reserve]) choice.reserve = squad.findIndex((_,i)=>i!==choice.player); } tournament = null; suddenDeath = false; shootout = null; matchPhase = 'regular'; screen('menu'); resetPositions(); particles = []; labels = []; shake = 0; $('#match-label').textContent = 'YILDIZLAR LİGİ'; }
    function start() {
        insights=Insights.create();matchVersion++; adminMatchBefore = null;rewardMatchId=matchVersion;rewardEnded=false;if(typeof CustomEvent==='function')window.dispatchEvent?.(new CustomEvent('arena-match-start',{detail:{id:rewardMatchId,training,sen:!!senSession}}));
        normalizeTeams();
        trainingDrawnSuper = training && teams[selection[0].team].category === 'special' && $('#training-drawn-super')?.value === 'yes';
        withdrawn = [new Set(), new Set()];
        matchPhase = 'regular'; shootout = null; suddenDeath = false;
        matchDuration = !training && selection.every(choice => teams[choice.team].category === 'special') ? 180 : 90; extraDuration = matchDuration / 3;
        score = [0, 0]; corners = [0, 0]; time = matchDuration; shots = [0, 0]; knockdowns = [0, 0]; particles = []; labels = [];
        pendingSubs.clear(); playerCondition.clear(); matchEvents = []; shotEffects = [];
        matchLight = $('#match-light').value === 'day' ? 'day' : 'night';
        trainingPartner = $('#training-partner').value === 'human' ? 'human' : 'cpu';
        stadiumCache = null;
        resetPositions(); goalWait = training ? .01 : 1.1; announcement = 'BAŞLAMA VURUŞU'; announceTime = 1.1;
        const venue = teams[selection[0].team].stadium;
        $('#venue-label').textContent = training ? 'ANTRENMAN TESİSLERİ' : (venue?.name || teams[selection[0].team].name) + ' · ' + (matchLight === 'day' ? 'GÜNDÜZ MAÇI' : 'GECE MAÇI');
        screen('playing'); $('#match-label').textContent = training ? 'ANTRENMAN ARENASI' : mode === 'ai-team' ? 'SEN + CPU - 2V2' : mode === 'coop' ? 'BİRLİKTE OYNA · 2V2' : mode === 'ai' ? 'TEK OYUNCU · 1V1' : 'KARŞILIKLI · 1V1'; beep(700, .25, 'sine', .06, 'start');
    }
    function pause() { if(window.ArenaSpectator?.active)return; if (window.ArenaOnline?.active) { window.ArenaOnline.requestPause(); return; } if (state === 'playing') screen('paused'); else if (state === 'paused') screen('playing'); }
    function openHelp() { if (state === 'help') return; helpReturn = state; screen('help'); }
    function startExtraTime() {
        if (state !== 'draw-choice' && !(tournament && state === 'playing' && matchPhase === 'regular')) return;
        matchPhase = 'extra'; time = extraDuration; goalWait = 0; goalWinner = -1;
        retreat = null; penalty = null; goalKick = null; defensiveReset = null;
        players.forEach(p => { p.x = (p.side ? W * .72 : W * .28) + (p.i >= 2 ? (p.side ? -120 : 120) : 0); p.dir = p.side ? -1 : 1; p.y = FLOOR; p.vx = p.vy = p.kick = p.stun = p.slide = 0; });
        keepers.forEach(k => { k.x = k.side ? W - 105 : 105; k.y = FLOOR; k.vx = k.vy = 0; });
        Object.assign(ball, { x: W / 2, y: 310, vx: 0, vy: 0, owner: -1, keeper: -1, passenger: -1, fire: 0, controlLock: 0 });
        trail = []; announcement = 'UZATMALAR!'; announceTime = 1.5;
        screen('playing'); $('#match-label').textContent = 'UZATMALAR · 30 SANİYE';
    }
    function startShootout() {
        if (matchPhase === 'shootout') return;
        const afterExtra = matchPhase === 'extra';
        matchPhase = 'shootout'; shootout = { score: [0, 0], attempts: [0, 0], history: [[], []], nextSide: 0, wait: 0, done: false, afterExtra };
        goalWait = 0; goalWinner = -1; goalKick = null; retreat = null; defensiveReset = null;
        screen('playing'); $('#match-label').textContent = 'PENALTI ATIŞLARI'; awardPenalty(0);
    }
    function finish(acceptDraw = false) {
        if (tournament) acceptDraw = false;
        if (!training && !acceptDraw && !shootout && score[0] === score[1]) {
            if (matchPhase === 'extra') { startShootout(); return; }
            if (tournament) { startExtraTime(); return; }
            $('#draw-score').textContent = score[0] + ' : ' + score[1];
            $('#end-draw').classList.toggle('hidden', !!tournament);
            screen('draw-choice'); return;
        }
        const penalties = shootout?.done ? shootout.score : null;
        if(!training&&!rewardEnded){rewardEnded=true;if(typeof CustomEvent==='function')window.dispatchEvent?.(new CustomEvent('arena-match-ended',{detail:{id:rewardMatchId,score:[...score],penalties:penalties?[...penalties]:null,report:matchReport(),rewardSide:partyMatch?.seats.find(s=>s.controller===partyLocal[0])?.side||0}}));}
        if (acceptDraw && tournament) tournament = null;
        if (tournament) {
            tournament.record(score[0], score[1], penalties);
            if (tournament.champion === tournament.selected) { ceremonyTime = 0; screen('ceremony'); window.ArenaCrowd?.goal(); }
            else showBracket();
            return;
        }
        screen('result'); const decidingScore = penalties || score; const winner = decidingScore[0] === decidingScore[1] ? -1 : decidingScore[0] > decidingScore[1] ? 0 : 1;
        celebration = winner < 0 ? null : {side:winner,scorer:players.find(p=>p.side===winner)?.i,style:2,started:clock};
        $('#result-title').textContent = winner < 0 ? 'DOSTLUK KAZANDI!' : players[winner].team.name + ' KAZANDI!';
        $('#result-score').textContent = score[0] + ' : ' + score[1];
        if (penalties) $('#result-score').textContent += ' · Penaltılar ' + penalties[0] + ' : ' + penalties[1];
        $('#result-detail').textContent = `Şutlar ${shots[0]} – ${shots[1]}  /  Sersemletme ${knockdowns[0]} – ${knockdowns[1]}`;
        beep(900, .55, 'triangle', .06, 'end');
    }
    function crest(team) { return `<img class="crest real-crest" style="transform:scale(${team.crestScale || 1})" src="${team.crest}" alt="${team.name} arması">`; }
    function chooseLineup(side, role, index) {
        const choice = selection[side], squad = teams[choice.team].players;
        if (!squad[index]) return;
        if (!Number.isInteger(choice.reserve)) choice.reserve = squad.findIndex((_, i) => i !== choice.player);
        const previous = choice[role];
        choice[role] = index;
        for (const other of (teamMode() || competition === 'training' ? ['player', 'partner', 'reserve'] : ['player', 'reserve'])) {
            if (other !== role && choice[other] === index) choice[other] = previous;
        }
        renderSelection(); beep(540, .05);
    }
    function moveCarousel(side, step) {
        const pool = availableTeams(side); selection[side] = { team: pool[(pool.indexOf(selection[side].team) + step + pool.length) % pool.length], player: 0, partner: 1 };
        renderSelection(); alignCarousel(side); beep(460, .05);
    }
    function alignCarousel(side) {
        const strip = $('#teams-' + side), card = strip.querySelector?.('.selected');
        if (card) strip.scrollTo({ left: card.offsetLeft - strip.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2, behavior: reducedMotion ? 'instant' : 'smooth' });
    }
    function renderSelection() {
        menuPaintPending = true;
        normalizeTeams();
        document.querySelector('#teams-1').closest?.('.squad-panel')?.classList.toggle('hidden', competition === 'training' || competition === 'ucl');
        $('.two-squads').classList.toggle('training-selection', competition === 'training');
        for (let side = 0; side < 2; side++) {
            const pool = availableTeams(side), poolSet = new Set(pool);
            const tabs = $('#countries-' + side);
            if (!tabs.dataset.ready) {
                tabs.innerHTML = ['all', ...countries].map(country => `<button type="button" class="country-tab" data-country="${country}" data-country-side="${side}" aria-pressed="false">${country === 'all' ? '<span aria-hidden="true">🌍</span>' : country === 'Özel Takımlar' ? '<span aria-hidden="true">★</span>' : `<img src="assets/flags/${countryCodes[country]}.svg" alt="${country} bayrağı" width="24" height="16">`}<span>${country === 'all' ? 'Tüm takımlar' : country}</span><small>${availableTeams().filter(i => country === 'all' || teamCountry(i) === country).length}</small></button>`).join('');
                tabs.dataset.ready = 'true';
                $$(`#countries-${side} [data-country]`).forEach(button => button.onclick = () => {
                    countryFilters[side] = button.dataset.country;
                    const pool = availableTeams(side);
                    if (!pool.includes(selection[side].team)) selection[side] = { team: pool[0], player: 0, partner: 1 };
                    if (state === 'setup' && setupSteps()[setupStep].kind === 'team') setupFocus = ['all', ...countries].indexOf(countryFilters[side]);
                    renderSelection(); alignCarousel(side); beep(430, .05);
                });
            }
            $$(`#countries-${side} [data-country]`).forEach(button => {
                const active = button.dataset.country === countryFilters[side]; button.classList.toggle('selected', active); button.setAttribute('aria-pressed', String(active));
                const count = teams.filter((_, i) => !teams[i].draftTeam && eligibleTeam(i, side) && (button.dataset.country === 'all' || teamCountry(i) === button.dataset.country)).length;
                button.classList.toggle('hidden', count === 0);
                const badge = button.querySelector?.('small'); if (badge) badge.textContent = count;
            });
            const strip = $('#teams-' + side);
            if (!strip.dataset.ready) {
                strip.innerHTML = availableTeams().map(i => { const t = teams[i]; return `<button class="team-card" data-side="${side}" data-team="${i}" aria-label="${t.name}" aria-pressed="false">${crest(t)}<b>${t.name}</b><small>${t.city}</small></button>`; }).join('');
                strip.dataset.ready = 'true';
                let drag = null, suppressClick = false;
                strip.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button === 0) drag = { x: e.clientX, left: strip.scrollLeft, moved: false }; });
                strip.addEventListener('pointermove', e => {
                    if (!drag) return;
                    if (Math.abs(e.clientX - drag.x) > 7) { drag.moved = true; strip.setPointerCapture(e.pointerId); strip.style.scrollSnapType = 'none'; }
                    if (drag.moved) { e.preventDefault(); strip.scrollLeft = drag.left + drag.x - e.clientX; }
                });
                const endDrag = () => { if (!drag) return; suppressClick = drag.moved; drag = null; strip.style.scrollSnapType = ''; };
                strip.addEventListener('pointerup', endDrag); strip.addEventListener('pointercancel', endDrag);
                strip.addEventListener('lostpointercapture', endDrag);
                strip.addEventListener('click', e => { if (suppressClick) { e.preventDefault(); e.stopPropagation(); suppressClick = false; } }, true);
                strip.addEventListener('dragstart', e => e.preventDefault());
                strip.addEventListener('scrollend', () => {
                    if (state !== 'setup' || strip.clientWidth === 0 || setupSteps()[setupStep].kind !== 'team' || setupSteps()[setupStep].side !== side) return;
                    const cards = [...strip.querySelectorAll('[data-team]')].filter(card => !card.classList.contains('hidden')), center = strip.getBoundingClientRect().left + strip.clientWidth / 2;
                    if (!cards.length) return;
                    const closest = cards.reduce((a, b) => Math.abs(a.getBoundingClientRect().left + a.offsetWidth / 2 - center) < Math.abs(b.getBoundingClientRect().left + b.offsetWidth / 2 - center) ? a : b);
                    const team = +closest.dataset.team;
                    if (team !== selection[side].team) { selection[side] = { team, player: 0 }; renderSelection(); }
                });
                strip.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); moveCarousel(side, e.key === 'ArrowLeft' ? -1 : 1); } });
            }
            $$(`#teams-${side} [data-team]`).forEach(card => { const selected = +card.dataset.team === selection[side].team; card.classList.toggle('hidden', !poolSet.has(+card.dataset.team)); card.classList.toggle('selected', selected); card.setAttribute('aria-pressed', String(selected)); });
            $('#carousel-count-' + side).textContent = `${pool.indexOf(selection[side].team) + 1} / ${pool.length} · ${countryFilters[side] === 'all' ? 'TÜM TAKIMLAR' : countryFilters[side].toLocaleUpperCase('tr')} · KAYDIR VE SEÇ`;
            const t = teams[selection[side].team];
            const chosen = selection[side];
            if (chosen.partner === undefined || chosen.partner === chosen.player) chosen.partner = t.players.findIndex((_, i) => i !== chosen.player);
            if (!Number.isInteger(chosen.reserve) || chosen.reserve === chosen.player || !t.players[chosen.reserve] || (teamMode() || competition === 'training') && chosen.reserve === chosen.partner) chosen.reserve = t.players.findIndex((_, i) => i !== chosen.player && (!(teamMode() || competition === 'training') || i !== chosen.partner));
            $('#reserve-pick-' + side).innerHTML = `<div class="coach-card">${coachPortrait(t.coach)}<span><small>TEKNİK DİREKTÖR</small><b>${t.coach.name}</b></span></div><label for="reserve-select-${side}">YEDEĞİN KİM OLSUN?</label><select id="reserve-select-${side}" data-reserve-side="${side}">${t.players.map((p, i) => `<option value="${i}" ${chosen.reserve === i ? 'selected' : ''}>${p.name}${chosen.player === i ? ' · İlk oyuncuyla yer değiştir' : ''}</option>`).join('')}</select><small class="reserve-note">Aynı yıldız iki rolde olamaz. İlk oyuncuyu yedek seçersen yerleri değişir.</small>`;
            $('#roster-' + side).innerHTML = t.players.map((p, i) => `<button class="player-card ${selection[side].player === i ? 'selected' : ''}" data-side="${side}" data-player="${i}" aria-pressed="${selection[side].player === i}" style="--player-color:${t.color}">${portraitMarkup(p)}<span><b>${p.name}</b><small>${p.traits.title} · OVR ${p.overall}</small><small>${selection[side].player === i ? "İLK OYUNCU" : "YEDEK"} · HIZ ${p.speed}</small><span class="rating-bars"><i></i><i></i><i></i><i></i></span></span></button>`).join('');
            $('#partner-pick-' + side).innerHTML = (teamMode() || competition === 'training' ? `<label>İKİNCİ SAHA OYUNCUSU <select data-partner="${side}">${t.players.map((p, i) => `<option value="${i}" ${chosen.partner === i ? 'selected' : ''} ${chosen.player === i ? 'disabled' : ''}>${p.name}</option>`).join('')}</select></label><small>2 sahada + 1 yedek · ${mode === 'ai-team' ? 'Sen + CPU' : 'P1 + P2'} sol takımda</small>` : '<small>1 sahada + 2 yedek</small>') + `<div class="keeper-preview">${portraitMarkup(t.keeper)}<span>KALECİ · ${t.keeper.name}</span></div>`;
            const unlockStatus = competition === 'training' && t.category === 'special' ? 'Antrenmanda çizerek süper şut · Başlamadan önce seçebilirsin' : null;
            if(unlockStatus) $('#reserve-pick-' + side).innerHTML += `<small class="super-unlock-status">${unlockStatus}</small>`;
        }
        $('#versus').innerHTML = (competition === 'training' ? selection.slice(0, 1) : selection).map((s, i) => `${i ? '<span>VS</span>' : ''}<div>${portraitMarkup(teams[s.team].players[s.player])}<b>${teams[s.team].name}</b><small>${teams[s.team].players[s.player].name}</small></div>`).join('');
        $$('[data-team]').forEach(b => b.onclick = () => { selection[+b.dataset.side] = { team: +b.dataset.team, player: 0 }; renderSelection(); alignCarousel(+b.dataset.side); beep(460, .05); if (state === 'setup' && setupSteps()[setupStep].kind === 'team' && setupSteps()[setupStep].side === +b.dataset.side) advanceSetup(); });
        $$('[data-carousel]').forEach(b => b.onclick = () => moveCarousel(+b.dataset.carousel, +b.dataset.step));
        $$('[data-player]').forEach(b => b.onclick = () => { chooseLineup(+b.dataset.side, 'player', +b.dataset.player); if (state === 'setup' && setupSteps()[setupStep].kind === 'player' && setupSteps()[setupStep].side === +b.dataset.side) advanceSetup(); });
        $$('[data-reserve-side]').forEach(select => select.onchange = () => chooseLineup(+select.dataset.reserveSide, 'reserve', +select.value));
        $$('[data-partner]').forEach(select => select.onchange = () => chooseLineup(+select.dataset.partner, 'partner', +select.value));
        renderSetupWizard();
    }
    function burst(x, y, color, n = 20) {
        for (let i = 0; i < n; i++) particles.push({ x, y, vx: (Math.random() - .5) * 620, vy: -80 - Math.random() * 420, life: .5 + Math.random() * .65, color, size: 2 + Math.random() * 5 });
    }
    function label(text, x, y, color = '#d9ff66') { labels.push({ text, x, y, life: 1, color }); }
    function goalKickRisk(target) {
        return players.some(p => p.side !== target.side && p.stun <= 0 && Math.abs(p.x - target.x) < 150) ? .15 : .01;
    }
    function awardCorner(defendingSide) {
        if (training) { resetTraining(); return; }
        corners[defendingSide]++;
        const attackingSide = 1 - defendingSide;
        goalKick = null; retreat = null; defensiveReset = null;
        if (corners[defendingSide] % 3 === 0) {
            awardPenalty(attackingSide);
            announcement = '3 KORNER = PENALTI'; announceTime = 2;
            return;
        }
        penalty = null; trail = [];
        const inward = defendingSide ? -1 : 1;
        Object.assign(ball,{x:defendingSide?W-80:80,y:FLOOR-70,vx:inward*340,vy:-620,owner:-1,keeper:-1,passenger:-1,shooter:-1,lastTouchSide:attackingSide,fire:0,superShot:false,aimPath:null,saveChecked:false,groundPass:false,controlLock:.3});
        announcement = 'KORNER ' + (corners[defendingSide] % 3) + '/3'; announceTime = 1.5;
        renderBench(); renderRestartTools();
    }
    function restartOutOfPlay(defendingSide) {
        if (ball.lastTouchSide === defendingSide) awardCorner(defendingSide);
        else awardGoalKick(defendingSide);
    }
    function awardGoalKick(side) {
        if (training) { resetTraining(); return; }
        retreat = null; penalty = null; defensiveReset = null; trail = [];
        const dir = side ? -1 : 1;
        goalKick = { side, phase: 'aim', elapsed: 0, human: players.some(p => p.side === side && p.controller >= 0) };
        for (const p of players) {
            const peers = players.filter(q => q.side === p.side), rank = peers.indexOf(p);
            p.x = p.side === side ? (side ? W - 440 - rank * 330 : 440 + rank * 330) : W * (side ? .32 : .68) + rank * 180;
            p.y = FLOOR; p.vx = 0; p.vy = 0; p.kick = 0; p.slide = 0; p.stun = 0;
        }
        for (const k of keepers) { k.x = k.side ? W - 105 : 105; k.y = FLOOR; k.vx = 0; k.vy = 0; k.savePose = 0; }
        Object.assign(ball, { x: side ? W - 170 : 170, y: FLOOR - ball.r, vx: 0, vy: 0, owner: -1, keeper: -1, passenger: -1, fire: 0, effectLife: 0, controlLock: 0 });
        announcement = 'KALE VURUŞU'; announceTime = 1.2;
        applyPendingSubs(); renderBench(); renderRestartTools();
    }
    function takeGoalKick(target) {
        if (!goalKick || goalKick.phase !== 'aim' || !players.includes(target) || target.side !== goalKick.side) return false;
        const restart = goalKick, risk = goalKickRisk(target);
        const opponents = players.filter(p => p.side !== restart.side).sort((a, b) => Math.abs(a.x - target.x) - Math.abs(b.x - target.x));
        restart.intercepted = opponents.length > 0 && Math.random() < risk;
        restart.risk = risk; restart.receiver = restart.intercepted ? opponents[0] : target;
        restart.from = { x: ball.x, y: ball.y }; restart.to = { x: restart.receiver.x, y: restart.receiver.y - 35 };
        restart.duration = clamp(Math.abs(restart.to.x - ball.x) / 900, .55, 1.6);
        restart.elapsed = 0; restart.phase = 'flight';
        const keeper = keepers.find(k => k.side === restart.side);
        if (keeper) { keeper.kick = KICK_DURATION; keeper.kickDir = restart.side ? -1 : 1; keeper.action = 'kick'; }
        announcement = ''; announceTime = 0; renderBench(); renderRestartTools(); return true;
    }
    function updateGoalKick(dt) {
        const r = goalKick; r.elapsed += dt;
        if (r.phase === 'aim') {
            if(partyMatch&&r.human){for(const p of players.filter(p=>p.side===r.side&&p.controller>=0)){const input=partyControls(p);if(input.pass||input.kick){takeGoalKick(p);break;}}}
            if (!r.human && r.elapsed > 1.25) {
                const options = players.filter(p => p.side === r.side).sort((a, b) => goalKickRisk(a) - goalKickRisk(b));
                takeGoalKick(options[0]);
            }
            pressed.clear(); return;
        }
        const t = clamp(r.elapsed / r.duration, 0, 1);
        ball.x = r.from.x + (r.to.x - r.from.x) * t;
        ball.y = r.from.y + (r.to.y - r.from.y) * t - Math.sin(t * Math.PI) * 180;
        ball.spin += dt * 12;
        for (const k of keepers) k.kick = Math.max(0, k.kick - dt);
        if (t === 1) {
            Object.assign(ball, { owner: r.receiver.i, controlLock: .8, vx: 0, vy: 0, x: r.receiver.x + r.receiver.dir * 38, y: r.receiver.y - ball.r });
            label(r.intercepted ? 'PAS ARAYA GİRDİ!' : 'TOP SENDE!', r.receiver.x, r.receiver.y - 185, r.intercepted ? '#ff9f9f' : '#9dedcf');
            defensiveReset = { side: r.receiver.side, until: clock + .7 };
            goalKick = null; renderBench(); renderRestartTools();
        }
        pressed.clear();
    }
    function renderRestartTools() {
        const panel = $('#restart-tools');
        const show = goalKick && ['playing', 'paused'].includes(state);
        panel.classList.toggle('hidden', !show);
        if (!show) { panel.innerHTML = ''; return; }
        panel.innerHTML = goalKick.phase === 'flight' ? 'KALE VURUŞU · Top havada' : goalKick.human ?
            '<b>KALE VURUŞU</b><span>Sahadaki arkadaşına tıkla:</span>' + players.filter(p => p.side === goalKick.side).map(p => '<button data-goal-receiver="' + p.i + '">' + p.star.name + ' · %' + Math.round(goalKickRisk(p) * 100) + ' top kaybı</button>').join('') :
            '<b>RAKİP KALE VURUŞU KULLANIYOR</b>';
        $$('[data-goal-receiver]').forEach(b => b.onclick = () => { if(state!=='playing')return;const target=players[+b.dataset.goalReceiver];if(window.ArenaOnline?.active){if(window.ArenaOnline.role==='guest'){if(partyMatch?ownsSide(target.side):target.side===1)window.ArenaOnline.send({type:'point',side:target.side,x:target.x,y:target.y});return;}if(partyMatch?!ownsSide(target.side):target.side!==0)return;}takeGoalKick(target); });
    }
    function matchElapsed() { return Math.max(0, matchPhase === 'extra' ? matchDuration + extraDuration - time : matchPhase === 'shootout' ? matchDuration + (shootout?.afterExtra ? extraDuration : 0) : matchDuration - time); }
    function matchTimestamp(seconds = matchElapsed()) {
        const elapsed = Math.floor(seconds + 1e-7);
        return Math.floor(elapsed / 60).toString().padStart(2, '0') + ':' + (elapsed % 60).toString().padStart(2, '0');
    }
    function emitHighlight(side,values,scorer){const online=window.ArenaOnline,owned=partyMatch?partyLocal.some(controller=>players.some(p=>p.side===side&&p.controller===controller)):online?.active?side===(online.role==='host'?0:1):players.some(p=>p.side===side&&p.controller>=0);window.dispatchEvent(new CustomEvent('golbol-highlight',{detail:{side,score:values,scorer,owned,teams:selection.map(s=>teams[s.team].name),mode:training?'training':online?.active?'online':'friendly'}}));}
    function goal(winner, kind = 'goal') {
        if (goalWait > 0 || state !== 'playing') return;
        goalWinner = winner; window.ArenaCrowd?.goal();
        retreat = null; defensiveReset = null;
        const scorer = players.find(p => p.i === ball.shooter);Insights.goal(insights,scorer,winner);
        if(!window.ARENA_HEADLESS&&!senSession)emitHighlight(winner,score.map((n,i)=>i===winner?n+1:n),scorer?.star.name||teams[selection[winner].team].name);
        score[winner]++;if(!senSession&&!window.ARENA_HEADLESS)window.dispatchEvent(new CustomEvent('arena-goal',{detail:{id:rewardMatchId,side:winner,goals:score[winner],training,rewardSide:partyMatch?.seats.find(s=>s.controller===partyLocal[0])?.side||0}}));
        if (!training) matchEvents.push({ type: 'goal', side: winner, seconds: matchElapsed(), stamp: matchTimestamp(), scorer: scorer?.star.name || teams[selection[winner].team].name, ownGoal: scorer ? scorer.side !== winner : false, penalty: kind === 'penalty', score: [...score] });
        celebration = { side: winner, scorer: scorer?.side === winner ? scorer.i : players.find(p => p.side === winner)?.i, name: scorer?.side === winner ? scorer.star.name : teams[selection[winner].team].name, style: (score[0] + score[1] - 1) % 3, started: clock };
        goalWait = 2.3; renderBench(); announcement = 'GOOOL!'; announceTime = 2.3; shake = 13;
        applyPendingSubs();
        renderMatchEvents();
        burst(ball.x, ball.y, teams[selection[winner].team].color, 60); burst(W / 2, 180, '#d9ff66', 35); beep(870, .5, 'sawtooth', .035, 'goal');
        if (tournament && suddenDeath) finish();
    }

    function substitutionOpen() {
        return training || ((goalWait > 0 && goalWinner >= 0) || penalty && !penalty.shot || goalKick && goalKick.phase === 'aim');
    }
    function requestSub(p) {
        if(partyMatch&&window.ArenaOnline?.role==='guest'){const local=partyLocal.indexOf(p?.controller);if(local>=0)pressed.add(partyCodes[local][7]);return local>=0;}
        if (!p || !p.reserve || !['playing', 'paused'].includes(state)) return false;
        if (substitutionOpen()) return substitute(p);
        pendingSubs.set(p.i, p.reserve); renderBench(); renderMatchEvents(); return true;
    }
    function applyPendingSubs() {
        if (!substitutionOpen()) return;
        for (const [index, incoming] of [...pendingSubs]) {
            const p = players[index];
            pendingSubs.delete(index);
            if (p && benches[p.side].includes(incoming)) substitute(p, incoming);
        }
        renderBench(); renderMatchEvents();
    }
    function renderMatchEvents() {
        const panel = $('#match-events');
        panel.classList.toggle('hidden', training || !['playing', 'paused', 'result', 'bracket', 'ceremony'].includes(state));
        const home = teams[selection[0].team], away = teams[selection[1].team];
        const entries = matchEvents.map(e => {
            const detail = e.type === 'goal' ? '<b class="event-goal">⚽ GOL · ' + e.score.join(' – ') + '</b><span>' + e.scorer + (e.ownGoal ? ' (kendi kalesine)' : e.penalty ? ' (penaltı)' : '') + '</span>' :
                '<b class="event-sub">⇅ OYUNCU DEĞİŞİKLİĞİ</b><span class="player-in">↑ ' + e.incoming + '</span><span class="player-out">↓ ' + e.outgoing + '</span>';
            return '<li class="match-event ' + (e.side ? 'away-event' : 'home-event') + '"><div class="event-details">' + detail + '</div><time>' + e.stamp + '</time></li>';
        }).join('');
        panel.innerHTML = '<header class="event-header"><div><b>MAÇ AKIŞI</b><small>GERÇEK OYUN SÜRESİ · DAKİKA:SANİYE</small></div><span id="event-clock">' + matchTimestamp() + '</span></header>' +
            '<div class="event-teams"><span>' + home.name + '</span><b>' + score.join(' – ') + '</b><span>' + away.name + '</span></div>' +
            (pendingSubs.size ? '<div class="pending-changes">' + [...pendingSubs].map(([i, star]) => '<p>⏳ ' + players[i]?.star.name + ' → ' + star.name + ' · Oyun durunca uygulanacak</p>').join('') + '</div>' : '') +
            '<ol class="event-list">' + (entries || '<li class="event-empty">Maç başladı. Goller ve değişiklikler burada görünecek.</li>') + '</ol>';
    }
    function substitute(p, chosen = p?.reserve) {
        if (!p) return false;
        if (!['playing', 'paused'].includes(state) || shootout || !substitutionOpen() || !chosen || !training && withdrawn[p.side].has(chosen) || !benches[p.side].includes(chosen)) return false;
        const outgoing = p.star;
        const incoming = chosen;
        playerCondition.set(outgoing, { health: p.health, injury: p.injury, power: p.power });
        if (training) benches[p.side].push(outgoing);
        else withdrawn[p.side].add(outgoing);
        p.star = incoming; benches[p.side].splice(benches[p.side].indexOf(incoming), 1); syncBench();
        Object.assign(p, playerCondition.get(incoming) || { health: 100, injury: 0, power: .5 });
        p.stun = 0; p.immune = 1.5; p.kick = 0; p.slide = 0;
        p.cooldown = .4; p.power = Math.min(p.power, .5);
        // A dead-ball roster change must never leave a keeper-return countdown running.
        retreat = null;
        pendingSubs.delete(p.i);
        matchEvents.push({ type: 'substitution', seconds: matchElapsed(), stamp: matchTimestamp(), minute: Math.floor(matchElapsed() / 60), incoming: incoming.name, outgoing: outgoing.name, side: p.side });
        label('↑ ' + incoming.name + '  ↓ ' + outgoing.name, p.x, p.y - 160, '#8ee8ff');
        renderBench(); renderMatchEvents(); renderRestartTools(); return true;
    }
    function renderBench() {
        document.querySelector('#bench-info-1').parentElement?.classList.toggle('hidden', training && players.length === 1 || !!partyMatch&&partyLocal.length<2);
        for (let panel = 0; panel < 2; panel++) {
            const p = benchPlayer(panel); if (!p) continue;
            const reserves = benches[p.side], button = $('#sub-' + panel);
            button.textContent = !reserves.length ? 'DEĞİŞİKLİK HAKKI BİTTİ' : 'R1' + ' · ' + (training ? 'OYUNCU DEĞİŞTİR' : pendingSubs.has(p.i) ? 'DEĞİŞİKLİK BEKLİYOR' : substitutionOpen() ? 'OYUNCU DEĞİŞTİR' : 'DEĞİŞİKLİK İSTE');
            button.disabled = !reserves.length || !['playing', 'paused'].includes(state);
            $('#bench-info-' + panel).innerHTML = (training ? '' : '<div class="coach-card">' + coachPortrait(p.team.coach) + '<span><small>TEKNİK DİREKTÖR</small><b>' + p.team.coach.name + '</b></span></div>') + '<div class="bench-player">' + portraitMarkup(p.star) + '<span><small>SAHADA · ' + (p.controller < 0 ? 'CPU' : 'P' + (p.controller + 1)) + '</small><b>' + p.star.name + '</b><span class="condition-track"><i style="width:' + p.health + '%;background:' + (p.injury ? '#ff8585' : '#d9ff66') + '"></i></span><small class="' + (p.injury ? 'injured-status' : '') + '">' + (p.injury ? 'SAKAT · ' + Math.ceil(p.injury) + ' sn' : 'Kondisyon %' + Math.ceil(p.health)) + '</small></span></div><label>' + reserves.length + ' YEDEK' + (!training && teamMode() ? ' · ORTAK KULÜBE' : '') + '</label>' + (reserves.length ? '<select data-bench-panel="' + panel + '">' + reserves.map((star, i) => '<option value="' + i + '">' + star.name + '</option>').join('') + '</select>' : '') + '<small class="reserve-note">Kaleci: ' + (training ? 'Antrenman kalecisi' : teams[selection[p.side].team].keeper.name) + '</small>';
        }
        $$('[data-bench-panel]').forEach(select => select.onchange = () => { const panel = +select.dataset.benchPanel, p = benchPlayer(panel), index = +select.value; benches[p.side].unshift(...benches[p.side].splice(index, 1)); syncBench(); renderBench(); });
    }
    function applyContact(attacker, victim) {
        const damage = 16 * (attacker.star.senRatingMultiplier||1) * attacker.star.traits.aggression * victim.star.traits.fragility * ((window.ArenaPerformance?.quality(attacker)||1) / (window.ArenaPerformance?.quality(victim)||1));
        victim.health = Math.max(0, victim.health - damage);
        if (victim.health <= 55 && victim.injury <= 0) {
            victim.injury = 10;
            label('SAKATLANDI! YEDEK ÇAĞIR', victim.x, victim.y - 170, '#ff9090'); renderBench();
        }
        renderBench();
    }

    function trainingBallPlayer() {
        const owner = players.find(q => q.i === ball.owner);
        if (owner || !training || ball.keeper >= 0 || ball.passenger >= 0) return owner;
        // A ball beside a teammate is protected before formal possession is acquired.
        const distance = q => Math.hypot(ball.x - q.x, ball.y - (q.y - 50));
        return players.filter(q => q.stun <= 0 && distance(q) < 110)
            .sort((a, b) => (b.controller >= 0) - (a.controller >= 0) || distance(a) - distance(b) || a.i - b.i)[0];
    }
    function cpuMayPlayBall(p) {
        if (p.controller !== -1 || p.isKeeper) return true;
        const holder = trainingBallPlayer();
        return !(ball.keeper >= 0) && (!holder || holder === p || holder.side !== p.side);
    }
    function switchTrainingPlayer(controller = 0) { return training && requestSub(benchPlayer(controller)); }

    // A kick always animates, even when there is no ball. Contact happens after the wind-up.
    function isMotorcyclePlayer(p) { return !penalty && !p.isKeeper && !p.isCoach && powerTeam(p)?.short === 'BIG26' && p.star.name === 'Berberkerim'; }
    function beginKick(p, superShot = false) {
        if (!cpuMayPlayBall(p)) return false;
        if (p.stun > 0 || p.cooldown > 0 || p.kick > 0 || superShot && p.power < 1) return false;
        p.kick = KICK_DURATION; p.kickDir = p.dir; p.kickHit = false; p.kickSuper = superShot;
        const high = ball.y < p.y - 62 && Math.abs(ball.x - p.x) < 115;
        const bicycleRange = training && $('#training-drill').value === 'bicycle' ? 600 : 300;
        p.action = high ? ((p.side === 0 ? p.x > W - bicycleRange : p.x < bicycleRange) ? 'bicycle' : 'header') : 'kick';
        if (p.action === 'bicycle') p.kickDir = p.side === 0 ? 1 : -1;
        if (isMotorcyclePlayer(p)) {
            p.action = 'header';
            // Pop a reachable ball up first; the existing contact delay then resolves the header.
            if (ball.keeper < 0 && ball.passenger < 0 && (ball.owner < 0 || ball.owner === p.i) && Math.hypot(ball.x-p.x,ball.y-(p.y-43))<94 && (ball.x-p.x)*p.kickDir>-24) {
                ball.owner=-1;ball.controlLock=.3;ball.x=p.x+p.kickDir*38;ball.y=p.y-105;ball.vx=0;ball.vy=0;ball.groundPass=false;ball.aimPath=null;ball.fire=0;ball.iconsRocket=false;ball.shooter=-1;
            }
        }
        p.cooldown = .6; p.slide = 0; beep(180, .08, 'triangle', .035, 'pass'); return true;
    }
    function resolveKick(p) {
        if (!cpuMayPlayBall(p)) return;
        if (ball.owner >= 0 && ball.owner !== p.i) return;
        if (ball.keeper >= 0) return;
        const aerial = p.action === 'header' || p.action === 'bicycle';
        const dx = ball.x - p.x, dy = ball.y - (p.y - (aerial ? 95 : 43));
        const ballClose = Math.hypot(dx, dy) < (aerial ? 115 : 94);
        if (ballClose && (dx * p.kickDir > -24 || p.action === 'bicycle')) {
            ball.owner = -1; ball.controlLock = .3;
            ball.groundPass = false;
            const special = p.kickSuper && p.power >= 1;
            ball.heroSpeed=0;
            ball.vx = p.kickDir * (special ? 880 : 450 + p.star.shot * 11) + p.vx * .14;
            const contactHeight = p.y - ball.y;
            const goalDistance = p.kickDir > 0 ? W - 57 - ball.x : ball.x - 57;
            const lift = contactHeight < 38 ? (goalDistance < 280 ? 520 : 650) : 680;
            ball.vy = special ? -620 : -lift - p.star.shot * 3; ball.fire = special ? 1 : 0;
            ball.vx *= (p.star.senAppearance?p.star.senRatingMultiplier:p.star.traits.power*(window.ArenaPerformance?.quality(p)||1)) * (p.injury ? .72 : 1);
            if (aerial && !special && !isMotorcyclePlayer(p)) {
                ball.vx = p.kickDir * (p.action === 'bicycle' ? 690 : 480) * (p.star.senAppearance?p.star.senRatingMultiplier:p.star.traits.power*(window.ArenaPerformance?.quality(p)||1)) * (p.injury ? .72 : 1);
                ball.vy = p.action === 'bicycle' ? -390 : -330;
                label(p.action === 'bicycle' ? 'RÖVEŞATA!' : 'KAFA!', p.x, p.y - 175, '#8ee8ff');
            }
            ball.shooter = p.i; ball.lastTouchSide = p.side; ball.carryChecked = false; ball.passenger = -1;
            ball.buffonGoal = null; ball.saveChecked = false; ball.superShot = special; ball.iconsRocket = special && hasSpecialPowers(p);
            if (ball.iconsRocket) {
                p.kickDir = p.side === 0 ? 1 : -1;
                ball.vx = p.kickDir * (ball.heroSpeed||1350); ball.vy = 0;
                ball.fire = 10;
            }
            ball.vx *= adminFactor(p, 'shot'); ball.vy *= adminFactor(p, 'shot');
            const accuracy = adminValue(p, 'accuracy');
            const defendingSide = p.kickDir > 0 ? 1 : 0;
            const defendingKeeper = keepers.find(k => k.side === defendingSide);
            const upperCorner = goalTop(defendingSide) + POST_RADIUS + ball.r + 30;
            const lowerCorner = GOAL_BOTTOM - ball.r - 30;
            const keeperCenter = defendingKeeper ? defendingKeeper.y - 85 : FLOOR - 85;
            const openCorner = Math.abs(upperCorner - keeperCenter) >= Math.abs(lowerCorner - keeperCenter) ? upperCorner : lowerCorner;
            ball.aimY = ball.iconsRocket || accuracy !== undefined ? openCorner : 350;
            ball.aimPath = null;
            if (ball.iconsRocket || accuracy !== undefined && Math.abs(ball.vx) > 0) {
                if (accuracy !== undefined) ball.aimY += (Math.random() * 2 - 1) * 360 * (1 - accuracy / 10);
                const endX = p.kickDir > 0 ? W - GOAL_LINE + POST_RADIUS + ball.r + 2 : GOAL_LINE - POST_RADIUS - ball.r - 2;
                ball.aimPath = { x: ball.x, y: ball.y, endX, arc: Math.min(110, Math.max(0, Math.min(ball.y, ball.aimY) - ball.r - 30)) };
                ball.vy = 0;
            }
            Insights.shot(insights,p,special,ball,W);ball.statsSaveCounted=false;shots[p.side]++; burst(ball.x, ball.y, special ? '#d9ff66' : '#e9f6ff', special ? 24 : 8);
            ball.effect = special ? 'super' : p.action; ball.effectLife = special ? 1.3 : .65;
            shotEffects.push({ x: ball.x, y: ball.y, kind: ball.effect, dir: p.kickDir, life: .55, max: .55 });
            if (!special) burst(ball.x, ball.y, p.action === 'bicycle' ? '#d5a2ff' : p.action === 'header' ? '#ffce86' : '#88efff', reducedMotion ? 4 : 14);
            if (special) { burst(ball.x, ball.y, '#55dfff', reducedMotion ? 8 : 28); burst(ball.x, ball.y, '#fff4cc', reducedMotion ? 8 : 24); p.superPulse = .65; p.power = 0; shake = 7; label('S\u00dcPER \u015eUT!', p.x, p.y - 150); }
            if (special && p.controller >= 0 && canUseDrawnSuper(p)) beginDrawnSuper(p);
            beep(special ? 110 : 360, special ? .3 : .12, 'triangle', .06, special ? 'super' : 'shot'); return;
        }
        const opponent = players.filter(q => q.side !== p.side).sort((a, b) => Math.abs(a.x - p.x) - Math.abs(b.x - p.x))[0], distance = opponent ? opponent.x - p.x : Infinity;
        if (!ballClose && Math.abs(distance) < 100 && distance * p.kickDir > 0 && Math.abs(opponent.y - p.y) < 64 && opponent.stun <= 0 && opponent.immune <= 0) {
            opponent.stun = STUN_DURATION; opponent.immune = STUN_DURATION + 1.35;
            opponent.vx = p.kickDir * 280; opponent.vy = -160; opponent.kick = 0; opponent.slide = 0; opponent.hitFlash = .18;
            opponent.vx *= p.star.traits.aggression; applyContact(p, opponent);
            knockdowns[p.side]++; shake = 6; burst(opponent.x, opponent.y - 65, '#ffcf68', 18);
            label('SERSEMLEDİ!', opponent.x, opponent.y - 140, '#ffda80'); beep(90, .25, 'triangle', .06, 'impact');
        }
    }
    function controls(p) {
        if(partyMatch&&p.controller>=0)return partyControls(p);
        if (p.controller === -1) {
            if (retreat && p.side !== retreat.side) {
                if (p.ignoreRetreat) return {};
                const target = p.side ? W / 2 + 190 : W / 2 - 190;
                return { left: p.x > target + 12, right: p.x < target - 12 };
            }
            if (defensiveReset && clock < defensiveReset.until && p.side !== defensiveReset.side) {
                const target = p.side ? W / 2 + 190 + (p.i % 2) * 80 : W / 2 - 190 - (p.i % 2) * 80;
                return { left: p.x > target + 12, right: p.x < target - 12 };
            }
            const dir = p.side === 0 ? 1 : -1;
            const predicted = clamp(ball.x + ball.vx * .18, 95, W - 95);
            const allies = players.filter(q => q.side === p.side && q.stun <= 0);
            const owner = trainingBallPlayer();
            const allyHasBall = owner && owner.side === p.side && owner !== p;
            const previous = allies.find(q => q.i === p.teamChaser);
            const nearest = allies.reduce((best, q) => Math.abs(q.x - predicted) < Math.abs(best.x - predicted) ? q : best, p);
            const leader = owner && owner.side === p.side ? owner : previous && Math.abs(previous.x - predicted) < Math.abs(nearest.x - predicted) + 100 ? previous : nearest;
            for (const ally of allies) ally.teamChaser = leader.i;
            const chase = !allyHasBall && leader === p;
            const danger = ball.vx * dir < -130;
            let target = chase ? predicted - dir * 38 : predicted - dir * (danger ? 210 : -170);
            if (ball.keeper >= 0) target = ball.keeper === p.side ? (p.side ? W - 400 : 400) + (p.i >= 2 ? dir * 150 : 0) : (p.side ? W - 420 : 420);
            if (!chase) {
                const anchor = allyHasBall ? owner.x : leader.x;
                const supportRank = allies.filter(q => q !== leader).indexOf(p);
                const supportDir = (allyHasBall || !danger ? dir : -dir) * (supportRank % 2 ? -1 : 1);
                target = anchor + supportDir * 240;
                if (target < 110 || target > W - 110) target = anchor - supportDir * 240;
            }
            if (!chase) {
                const candidates = [target, target - 180, target + 180, leader.x - dir * 280].map(x => clamp(x, 120, W - 120));
                const clearance = x => Math.min(...players.filter(q => q !== p).map(q => Math.abs(q.x - x)));
                target = candidates.reduce((best, x) => clearance(x) - Math.abs(x - target) * .15 > clearance(best) - Math.abs(best - target) * .15 ? x : best);
            }
            target = clamp(target, 100, W - 100);
            const inRange = ball.keeper === undefined || ball.keeper < 0;
            const close = inRange && Math.hypot(ball.x - p.x, ball.y - (p.y - 65)) < 98;
            const forward = (ball.x - p.x) * dir > -18;
            const owns = ball.owner === p.i, opponentOwns = ball.owner >= 0 && players[ball.owner]?.side !== p.side;
            if (owns) target = p.side ? 130 : W - 130;
            const opportunity = chase && !allyHasBall && close && forward && !opponentOwns && (!owns || (p.side ? p.x : W - p.x) < 600);
            if (!opportunity) p.aiShotReadyAt = undefined;
            else if (p.aiShotReadyAt === undefined) p.aiShotReadyAt = clock + (window.ArenaPerformance?.reaction(p) || 0);
            const hit = opportunity && clock >= p.aiShotReadyAt;
            const opponent = players.find(q => q.side !== p.side && Math.abs(q.x - p.x) < 105 && (q.x - p.x) * dir > 0);
            if (hit && p.cooldown <= 0) p.dir = dir;
            return {
                left: p.x > target + 12 && !hit, right: p.x < target - 12 && !hit,
                jump: (owns || chase) && players.some(q => q !== p && Math.abs(q.x - p.x) < 115 && (q.x - p.x) * Math.sign(target - p.x) > 0 && Math.abs(q.y - p.y) < 75) || inRange && chase && ball.y < 440 && ball.y > 240 && Math.abs(predicted - p.x) < 115 && ball.vy > -200,
                pass: hit && !!opponent,
                kick: hit, super: hit && p.power >= 1 && (isIcons(p) || (dir > 0 ? W - p.x : p.x) < 690),
                slide: !allyHasBall && chase && opponentOwns && Math.abs(ball.x - p.x) < 140 && Math.abs(ball.y - p.y) < 90 || chase && danger && ball.y > 510 && Math.abs(ball.x - p.x) > 100 && Math.abs(ball.x - p.x) < 175 && (ball.x - p.x) * dir > 0,
                sub: p.injury > 0 || p.health < 65 || time < 45 && !p.autoSubDone && p.reserve && !owns
            };
        }
        const codes = p.controller === 0 ? ['KeyA', 'KeyD', 'KeyW', 'KeyS', 'KeyV', 'KeyB'] : ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyK', 'KeyL'];
        return { left: keys[codes[0]], right: keys[codes[1]], jump: pressed.has(codes[2]), slide: pressed.has(codes[3]), kick: pressed.has(codes[4]), super: pressed.has(codes[5]), pass: pressed.has(p.controller === 0 ? 'KeyF' : 'KeyJ'), sub: pressed.has(p.controller === 0 ? 'KeyR' : 'KeyO') };
    }
    function superRechargeSeconds(p) { return hasSpecialPowers(p) ? 20 : 10; }
    function powerStatus(p){
        return p.power>=1?'HAZIR':Math.ceil((1-p.power)*superRechargeSeconds(p))+' SN';
    }
    function update(dt) {
        if (state !== 'playing' || $('#admin-dialog').open) return;
        if (drawnSuper && !canUseDrawnSuper(players[drawnSuper.shooter])) { drawnSuper = null; if(canvas.style)canvas.style.cursor = ''; }
        if (drawnSuper?.phase === 'drawing') return;
        if (drawnSuper?.phase === 'flight') { updateDrawnSuper(dt); return; }
            for (const [key, panel] of [['KeyR', 0], ['KeyO', 1]]) if (pressed.has(key)) { pressed.delete(key); requestSub(benchPlayer(panel)); }
        clock += dt; shake = Math.max(0, shake - dt * 28); announceTime = Math.max(0, announceTime - dt);
        shotEffects = shotEffects.filter(e => (e.life -= dt) > 0);
        ball.effectLife = Math.max(0, (ball.effectLife || 0) - dt);
        ball.controlLock = Math.max(0, (ball.controlLock || 0) - dt);
        particles = particles.filter(p => p.life > 0); labels = labels.filter(p => p.life > 0);
        for (const p of particles) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 700 * dt; p.life -= dt; }
        for (const p of labels) { p.y -= 24 * dt; p.life -= dt; }
        if (shootout) {
            if (penalty) updatePenalty(dt);
            else {
                shootout.wait -= dt; pressed.clear();
                if (shootout.wait <= 0) {
                    if (shootout.done) finish();
                    else awardPenalty(shootout.nextSide);
                }
            }
            return;
        }
        if (goalWait > 0) {
            goalWait -= dt; pressed.clear();
            if (goalWait <= 0) {
                const savedBenches = benches.map(b => [...b]);
                const saved = players.map(p => ({ ...(training ? { controller: p.controller } : {}), power: p.power, star: p.star, reserve: p.reserve, substituted: p.substituted, health: p.health, injury: p.injury }));
                resetPositions(); players.forEach((p, i) => Object.assign(p, saved[i])); benches = savedBenches; syncBench(); renderBench();
                if (training) resetTraining();
            }
            return;
        }
        if (goalKick) { updateGoalKick(dt); return; }
        if (penalty) { updatePenalty(dt); return; }
        const controlled=players.find(p=>p.i===ball.owner);Insights.control(insights,controlled,controlled?.side??(ball.keeper>=0?ball.keeper:null),dt);
        const oldSecond = Math.floor(matchElapsed() + 1e-7);
        time = training ? 90 : suddenDeath ? time + dt : Math.max(0, time - dt);
        if (!training && oldSecond !== Math.floor(matchElapsed() + 1e-7)) $('#event-clock').textContent = matchTimestamp();
        if (!suddenDeath && time === 0) { finish(); return; }
        if (retreat) {
            retreat.remaining = Math.max(0, retreat.remaining - dt);
            if (retreat.remaining <= 0) {
                const side = retreat.side;
                const violation = players.some(p => p.side !== side && (p.side === 0 ? p.x > W / 2 : p.x < W / 2));
                retreat = null;
                // Standing in the wrong half is a restart problem, not a penalty foul.
                if (violation && ball.keeper === side) { awardGoalKick(side); return; }
            }
        }
        for (const p of players) {
            if (p.injury > 0) { const before = Math.ceil(p.injury); p.injury = Math.max(0, p.injury - dt); if (!p.injury) p.health = 70; if (before !== Math.ceil(p.injury)) renderBench(); }
            p.passCooldown = Math.max(0, (p.passCooldown || 0) - dt); 
            const input = controls(p);
            if (!training && input.sub && !p.autoSubDone && requestSub(p)) p.autoSubDone = true;
            p.cooldown = Math.max(0, p.cooldown - dt); p.slideCool = Math.max(0, p.slideCool - dt);
            if (ball.passenger === p.i) continue;
            p.slide = Math.max(0, p.slide - dt); p.immune = Math.max(0, p.immune - dt); p.hitFlash = Math.max(0, p.hitFlash - dt);
            p.superPulse = Math.max(0, (p.superPulse || 0) - dt);
            p.power = training ? 1 : Math.min(1, p.power + dt / superRechargeSeconds(p));
            if (p.stun > 0) { p.stun = Math.max(0, p.stun - dt); p.vx *= Math.exp(-6 * dt); }
            else {
                const movement = (input.right ? 1 : 0) - (input.left ? 1 : 0);
                if (movement && p.kick <= 0) p.dir = Math.sign(movement);
                p.vx = movement * (p.star.senAppearance?283*(p.star.senRatingMultiplier||1):235 + (p.star.overall || 78) * .8) * (p.kick > 0 ? .45 : 1) * (p.star.senAppearance?1:window.ArenaPerformance?.quality(p) || 1);
                p.vx *= adminFactor(p, 'speed');
                if (p.injury) p.vx *= .58;
                if (!movement && p.y === FLOOR) p.walk = 0;
                if (input.slide && p.slideCool === 0 && p.y === FLOOR && p.kick === 0) { p.slide = .35; p.slideCool = 1.1; }
                if (p.slide > 0) p.vx = p.dir * 490 * (p.star.senRatingMultiplier||1);
                if (input.jump && !p.jumpHeld && (p.y === FLOOR || (adminValue(p, 'doubleJump') ?? hasSpecialPowers(p)) && (p.jumps || 0) < 2)) {
                    p.jumps = p.y === FLOOR ? 1 : (p.jumps || 0) + 1;
                    p.vy = (-620 - p.star.jump * 12) * adminFactor(p, 'jump'); p.slide = 0; beep(p.jumps === 2 ? 330 : 230, .07, 'sine', .06, 'jump');
                }
                p.jumpHeld = !!input.jump;
                if (input.pass && playerPass(p)) { /* A pass replaces the shot. */ }
                else if (input.super) beginKick(p, true); else if (input.kick) beginKick(p, false);
            }
            p.vy += GRAVITY * (senSession?.rules?.gravity||1) * dt; p.x = clamp(p.x + p.vx * dt, 77, W - 77); p.y = Math.min(FLOOR, p.y + p.vy * dt);
            if (p.y === FLOOR) { p.vy = 0; p.jumps = 0; } p.walk += Math.abs(p.vx) * dt * .035;
        }
        pressed.clear();
        // Resolve both movements first so the hit range does not depend on player order.
        for (const p of players) if (p.kick > 0 && p.stun <= 0) {
            p.kick = Math.max(0, p.kick - dt);
            if (!p.kickHit && KICK_DURATION - p.kick >= HIT_TIME) { p.kickHit = true; resolveKick(p); if (drawnSuper) return; }
        }
        for (let i = 0; i < players.length; i++)for (let j = i + 1; j < players.length; j++) {
            const a = players[i], b = players[j];
            if (!a.stun && !b.stun && Math.abs(a.x - b.x) < 78 && Math.abs(a.y - b.y) < 75) { const sign = a.x <= b.x ? 1 : -1, overlap = (78 - Math.abs(a.x - b.x)) / 2; a.x = clamp(a.x - overlap * sign, 77, W - 77); b.x = clamp(b.x + overlap * sign, 77, W - 77); }
        }
        // Keep a player's body from overlapping a goalkeeper and squeezing the ball.
        for (const k of keepers) for (const p of players) {
            if (ball.passenger === p.i || Math.abs(p.y - k.y) >= 110) continue;
            const dx = p.x - k.x, gap = 78;
            if (Math.abs(dx) < gap) {
                const dir = k.side ? -1 : 1;
                p.x = clamp(k.x + dir * gap, 77, W - 77);
                if (p.vx * dir < 0) p.vx = 0;
            }
        }
        if (ball.owner >= 0 && !penalty) {
            let carrier = players[ball.owner];
            for (const tackler of players) if (tackler.side !== carrier.side && tackler.slide > 0 && ball.controlLock <= 0 && Math.abs(tackler.x - carrier.x) < 105 && Math.abs(tackler.y - carrier.y) < 75) { ball.owner = tackler.i; ball.controlLock = .65; carrier = tackler; label('TOP KAPILDI!', carrier.x, carrier.y - 160, '#8ceaff'); break; }
            ball.x = clamp(carrier.x + carrier.dir * 38, GOAL_LINE + ball.r + 5, W - GOAL_LINE - ball.r - 5); ball.y = carrier.y - ball.r;
            ball.vx = carrier.vx; ball.vy = 0; ball.fire = 0;
            for (const k of keepers) updateKeeper(k, dt);
            return;
        }
        for (const k of keepers) updateKeeper(k, dt);
        if (ball.keeper >= 0) {
            const holder = keepers.find(k => k.side === ball.keeper);
            if (holder) {
                ball.x = holder.x + holder.dir * 32; ball.y = holder.y - 60;
                ball.vx = 0; ball.vy = 0; trail = []; return;
            }
            ball.keeper = -1;
        }
        if (ball.iconsRocket && ball.fire > 0) {
            ball.vx = (players[ball.shooter].side === 0 ? 1 : -1) * (ball.heroSpeed||1350) * adminFactor(players[ball.shooter], 'shot');
        }
        if (ball.aimPath && ball.owner < 0 && ball.passenger < 0) {
            const path = ball.aimPath;
            const progress = clamp((ball.x + ball.vx * dt - path.x) / (path.endX - path.x), 0, 1);
            const nextY = path.y + (ball.aimY - path.y) * progress - path.arc * Math.sin(Math.PI * progress);
            ball.vy = (nextY - ball.y) / dt;
        } else if (ball.iconsRocket && ball.fire > 0) {
            ball.y += ((ball.aimY ?? 350) - ball.y) * Math.min(1, dt * 12); ball.vy = 0;
        } else ball.vy += GRAVITY * (senSession?.rules?.gravity||1) * dt;
        // A single save roll per incoming shot; admin ratings override default chances.
        for (const k of keepers) if (ball.shooter >= 0 && players[ball.shooter]?.side !== k.side &&
            ball.vx * k.dir < 0 && (k.side ? ball.x > W - 320 : ball.x < 320) &&
            ball.y > GOAL_TOP + ball.r && ball.y <= GOAL_BOTTOM - ball.r &&
            (ball.superShot || k.isTrainingKeeper || isBuffon(k) || adminValue(k, 'save') !== undefined)) {
            if (!ball.saveChecked) {
                const chance = k.senLevel!==undefined ? window.ArenaSenCore.keeperConfig(k.star.overall).saveChance : k.isTrainingKeeper ? .15 : adminValue(k,'save') !== undefined ? adminValue(k,'save')/10 : (window.ArenaKeeperBalance?.chance(k,players[ball.shooter],Math.hypot(ball.vx,ball.vy),!!ball.superShot)||.45)*.55;
                ball.buffonGoal = Math.random() < 1 - chance; ball.saveChecked = true;
            }
            if (!ball.buffonGoal) {
                ball.passenger = -1; ball.iconsRocket = false; ball.aimPath = null; ball.fire = 0; ball.superShot = false;
                ball.lastTouchSide = k.side; ball.keeper = k.side; ball.owner = -1; ball.vx = 0; ball.vy = 0;
                k.holdTime = 0; k.keeperAction = 'save'; k.savePose = .7;
                label('KURTARI\u015e!', k.x, k.y - 165, '#94efdc'); return;
            }
        }
        let sweptKeeperResolved = false;
        const ballSteps = Math.max(1, Math.ceil(Math.hypot(ball.vx, ball.vy) * dt / 4));
        for (let step = 0; step < ballSteps; step++) {
            ball.x += ball.vx * dt / ballSteps; ball.y += ball.vy * dt / ballSteps;
            collideGoalFrame();
            if (!sweptKeeperResolved) for (const k of keepers) if (solidKeeperContact(k)) {sweptKeeperResolved=true;break;}
            if (ball.keeper >= 0 || ball.owner >= 0) return;
            if (scoreBallAtGoal()) return;
        }
        ball.spin += ball.vx * dt / 30; ball.fire = Math.max(0, ball.fire - dt); ball.vx *= Math.exp(-.18 * dt);
        if (ball.y + ball.r < goalTop(ball.x<0?0:1) && (ball.x + ball.r < 0 || ball.x - ball.r > W)) {
            restartOutOfPlay(ball.x < 0 ? 0 : 1); return;
        }
        if (ball.passenger >= 0) {
            ball.y += (470 - ball.y) * Math.min(1, dt * 12); ball.vy = 0; ball.fire = 1;
            const carried = players[ball.passenger];
            carried.x = clamp(ball.x + Math.sign(ball.vx) * 20, 18, W - 18);
            carried.y = Math.min(FLOOR, ball.y + 20); carried.vx = ball.vx; carried.vy = 0;
        }
        if (ball.y > FLOOR - ball.r) { ball.y = FLOOR - ball.r; ball.vy = ball.groundPass ? 0 : -Math.abs(ball.vy) * .69; if (Math.abs(ball.vy) < 60) ball.vy = 0; ball.vx *= Math.exp(-(senSession?.rules?.friction ? .04 : ball.groundPass ? .32 : 1.5) * dt); }
        if (ball.y < ball.r) { ball.y = ball.r; ball.vy = Math.abs(ball.vy) * .7; }
        const contactStartX = ball.x;
        const contacts = new Set();
        let keeperResolved = sweptKeeperResolved;
        for (const p of [...keepers, ...players]) {
            if (keeperResolved || ball.passenger >= 0 || ball.keeper >= 0 || ball.owner >= 0) break;
            if (!cpuMayPlayBall(p)) continue;
            if (p.isKeeper && sweptKeeperResolved) continue;
            const low = p.slide > 0 || p.stun > 0;
            const size = heroSize(p);
            const parts = low ? [{ x: p.x, y: p.y - 18 * size, r: 26 * size }] : [{ x: p.x, y: p.y - 96 * size, r: 36 * size }, { x: p.x, y: p.y - 29 * size, r: 24 * size }];
            if (p.isKeeper && p.savePose > 0) parts.unshift({ x: p.x + p.dir * (p.keeperAction === 'dive' ? 58 : 30), y: p.y - (p.keeperAction === 'dive' ? 65 : 115), r: 22 });
            for (const part of parts) {
                const dx = ball.x - part.x, dy = ball.y - part.y, d = Math.hypot(dx, dy), min = ball.r + part.r;
                if (d < min) {
                    contacts.add(p); ball.lastTouchSide = p.side;
                    if (!p.isKeeper && ball.fire <= 0 && ball.controlLock <= 0 && ball.y > p.y - 65 && p.stun <= 0) { ball.owner = p.i; ball.vx = 0; ball.vy = 0; ball.fire = 0; ball.controlLock = .2; break; }
                    if (p.isKeeper && keeperContact(p)) { keeperResolved = true; break; }
                    ball.groundPass = false; ball.aimPath = null;
                    if (!p.isKeeper && !low && part.r === 36 && ball.vy > 0 && ball.fire <= 0 && p.cooldown <= 0 && ball.y < p.y - 65) {
                        if (beginKick(p)) { p.kickHit = true; resolveKick(p); break; }
                    }
                    // One 5% roll on the first opponent impact of each powered shot.
                    if (!p.isKeeper && ball.fire > 0 && ball.shooter >= 0 && p.side !== players[ball.shooter].side && !ball.carryChecked && (p.x - players[ball.shooter].x) * ball.vx > 0) {
                        ball.carryChecked = true;
                        if (ball.iconsRocket || Math.random() < .05) {
                            ball.passenger = p.i; ball.vx = Math.sign(ball.vx) * 980; ball.vy = 0;
                            p.stun = STUN_DURATION; p.immune = STUN_DURATION + 1.35; p.kick = 0; p.slide = 0;
                            p.dir = -Math.sign(ball.vx); p.hitFlash = .2;
                            knockdowns[players[ball.shooter].side]++; shake = 12;
                            label('ROKET GOL!', p.x, p.y - 155, '#ffda80'); burst(p.x, p.y - 50, '#d9ff66', 30);
                            break;
                        }
                    }
                    const nx = d ? dx / d : p.dir, ny = d ? dy / d : -1;
                    ball.x = part.x + nx * (min + .5); ball.y = part.y + ny * (min + .5);
                    const dot = (ball.vx - p.vx) * nx + (ball.vy - p.vy) * ny;
                    if (dot < 0) { ball.vx -= 1.65 * dot * nx; ball.vy -= 1.65 * dot * ny; }
                    ball.vx += p.vx * .13; ball.vy = Math.min(ball.vy, -65);
                }
            }
        }
        if (ball.keeper >= 0 || ball.owner >= 0) return;
        if (ball.passenger < 0 && contacts.size > 1 && [...contacts].some(p => p.isKeeper)) {
            // Release a pinched ball upward rather than adding multiple horizontal impulses.
            ball.x = clamp(contactStartX, GOAL_LINE + ball.r + POST_RADIUS, W - GOAL_LINE - ball.r - POST_RADIUS);
            ball.vx = clamp(ball.vx, -180, 180);
            ball.vy = Math.min(ball.vy, -420);
            ball.fire = 0;
        }
        if (ball.passenger < 0 && contacts.size > 0) {
            // Body penetration correction alone must never carry the ball over a goal line.
            const left = GOAL_LINE - POST_RADIUS - ball.r, right = W - left;
            if (contactStartX >= left && ball.x < left) ball.x = left + .01;
            if (contactStartX <= right && ball.x > right) ball.x = right - .01;
        }
        collideGoalFrame();
        if (scoreBallAtGoal()) return;
        if (ball.y + ball.r >= goalTop(0) && ball.x < ball.r) { ball.x = ball.r; ball.vx = Math.abs(ball.vx) * .8; }
        if (ball.y + ball.r >= goalTop(1) && ball.x > W - ball.r) { ball.x = W - ball.r; ball.vx = -Math.abs(ball.vx) * .8; }
        const senShot=players.find(p=>p.i===ball.shooter)?.star.senRatingMultiplier||1;const speedLimit = (adminActive || ball.heroSpeed ? 2700 : 1350)*senShot; ball.vx = clamp(ball.vx, -speedLimit, speedLimit); ball.vy = clamp(ball.vy, -1100, 1100);
        trail.push({ x: ball.x, y: ball.y, fire: ball.fire, effect: ball.effectLife > 0 ? ball.effect : null }); if (trail.length > 20) trail.shift();
    }

    // Rendering uses vector paths and a cached stadium at the display's pixel density.
    const rect = (x, y, w, h, color) => { c.fillStyle = color; c.fillRect(x, y, w, h); };
    function round(x, y, w, h, r, color, stroke) { c.beginPath(); c.roundRect(x, y, w, h, r); c.fillStyle = color; c.fill(); if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1; c.stroke(); } }
    function circle(x, y, r, color) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fillStyle = color; c.fill(); }
    function ellipse(x, y, rx, ry, color) { c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fillStyle = color; c.fill(); }
    function line(x, y, x2, y2, color, width = 1) { c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.strokeStyle = color; c.lineWidth = width; c.lineCap = 'round'; c.stroke(); }
    function text(t, x, y, size, color = '#fff', align = 'center', weight = 800) { c.fillStyle = color; c.font = size >= 24 ? `400 ${size}px "Golbol Display", sans-serif` : `${Math.min(weight, 700)} ${size}px "Golbol UI", "Segoe UI", sans-serif`; c.textAlign = align; c.fillText(t, x, y); }
    function polygon(points, color, stroke) { c.beginPath(); points.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.closePath(); c.fillStyle = color; c.fill(); if (stroke) { c.strokeStyle = stroke; c.lineWidth = 2; c.stroke(); } }
    function star(x, y, r, color) { const pts = []; for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * .45 : r; pts.push([x + Math.cos(a) * rr, y + Math.sin(a) * rr]); } polygon(pts, color); }
    let stadiumCache = null, stadiumCacheKey = '', renderScale = 1;
    let cameraX=0,cameraWidth=1200,screenFit=false,viewOffsetX=0,viewOffsetY=0;
    function resizeCanvas(){
        screenFit=!window.ARENA_HEADLESS&&$('.game-wrap').classList.contains('in-match');
        if($('.game-wrap').style)$('.game-wrap').style.setProperty('--pitch-ratio',W+'/'+H);
        if(screenFit){const width=canvas.clientWidth||1200,height=canvas.clientHeight||660,ratio=Math.min(1.5,window.devicePixelRatio||1,2560/width),rw=Math.round(width*ratio),rh=Math.round(height*ratio);if(canvas.width!==rw||canvas.height!==rh){canvas.width=rw;canvas.height=rh;stadiumCache=null;}renderScale=Math.min(canvas.width/W,canvas.height/H);cameraX=0;cameraWidth=W;viewOffsetX=(canvas.width-W*renderScale)/2;viewOffsetY=(canvas.height-H*renderScale)/2;return;}
        const desired=Math.min(1.25,Math.max(.5,(canvas.clientWidth||W)/W*Math.min(1.5,window.devicePixelRatio||1)));if(Math.abs(desired-renderScale)>.02||!stadiumCache||canvas.width!==Math.round(W*desired)||canvas.height!==Math.round(H*desired)){renderScale=desired;canvas.width=Math.round(W*desired);canvas.height=Math.round(H*desired);stadiumCache=null;}cameraX=0;cameraWidth=W;viewOffsetX=0;viewOffsetY=0;
    }
    function prepareView(){resizeCanvas();c.setTransform(1,0,0,1,0,0);c.fillStyle='#102034';c.fillRect(0,0,canvas.width,canvas.height);c.setTransform(renderScale,0,0,renderScale,viewOffsetX,viewOffsetY);}
    function screenPoint(e){const box=canvas.getBoundingClientRect();return {x:((e.clientX-box.left)*canvas.width/box.width-viewOffsetX)/renderScale,y:((e.clientY-box.top)*canvas.height/box.height-viewOffsetY)/renderScale};}

    function stadium() {
        const homeTeam = teams[selection[0].team], venue = homeTeam.stadium || { name: homeTeam.name, architecture: 'bowl', seat: homeTeam.color, trim: homeTeam.dark };
        const day = matchLight === 'day', cacheKey = selection[0].team + ':' + matchLight + ':' + W + ':' + training+':'+(window.ArenaLanguage?.current||'tr');
        if (cacheKey !== stadiumCacheKey) { stadiumCache = null; stadiumCacheKey = cacheKey; }
        if (stadiumCache) { c.drawImage(stadiumCache, 0, 0, W, H); return; }
        if(training){drawTrainingFacility();return;}
        c.save(); c.scale(W / 1200, 1);
        {
            const W = 1200;
            const sky = c.createLinearGradient(0, 0, 0, FLOOR); sky.addColorStop(0, day ? '#63b7ec' : '#0b1730'); sky.addColorStop(.65, day ? '#c9e5f4' : '#294b66'); sky.addColorStop(1, day ? '#e5f4df' : '#6b8390'); rect(0, 0, W, H, sky);
            if (!day) for (let i = 0; i < 55; i++)circle((i * 173) % W, (i * 41) % 200, .7 + (i % 3) * .3, '#c7e3ff55');
            circle(979, 105, 35, day ? '#fff1b344' : '#c1e2f407'); circle(979, 105, 24, day ? '#fff5bf' : '#c1e2f40c');
            if (day) for (const x of [220, 485, 785]) { ellipse(x, 90, 65, 13, '#ffffffa0'); ellipse(x + 21, 81, 38, 16, '#ffffffa0'); }
            for (let i = 0; i < 28; i++) { const x = i * 47, h = 30 + (i * 53) % 105; rect(x, 295 - h, 38, h, '#10243a'); for (let j = 0; j < 4; j++)rect(x + 7 + j * 8, 305 - h, 3, 5, '#adc4c329'); }
            // Roof trusses and the light ribbon give the stadium depth.
            polygon([[0, 194], [165, 244], [1035, 244], [1200, 194], [1200, 236], [1040, 273], [160, 273], [0, 236]], '#12273b');
            line(0, 196, 165, 246, '#6b91ab', 3); line(165, 246, 1035, 246, '#6b91ab', 3); line(1035, 246, 1200, 196, '#6b91ab', 3);
            for (let x = 0; x < W; x += 44) { line(x, 219, x + 23, 256, '#42627c', 2); line(x + 23, 256, x + 44, 219, '#42627c', 2); }
            line(0, 259, W, 259, '#77ddf0', 3); rect(0, 275, W, 183, '#16293c');
            window.GolbolWorld?.architecture(c, venue, day);
            for (let row = 0; row < 9; row++) {
                const y = 289 + row * 18; rect(0, y + 11, W, 3, venue.seat);
                for (let i = 0; i < 89; i++) { const x = i * 14 + (row % 2) * 7, seed = (i * 11 + row * 7); circle(x, y, 3.1, ['#a29899', '#788ca7', '#c6a386', '#5e7d97'][seed % 4]); round(x - 4, y + 3, 8, 7, 2, [venue.seat, venue.trim, venue.seat, '#496a80', '#a3b3bd'][seed % 5]); }
            }
            round(385, 269, 430, 23, 4, venue.seat); text(venue.name.toLocaleUpperCase('tr'), 600, 285, 13, '#fff');
            for (const x of (day ? [] : [140, 1060])) {
                line(x, 110, x, 300, '#40566c', 7); round(x - 52, 88, 104, 27, 4, '#1b3148', '#6586a0');
                c.shadowBlur = 20; c.shadowColor = '#d4f7ff'; for (let j = 0; j < 8; j++)round(x - 46 + j * 12, 94, 8, 14, 2, '#dcf8ff'); c.shadowBlur = 0;
                const glow = c.createLinearGradient(0, 110, 0, 530); glow.addColorStop(0, '#b8ecff20'); glow.addColorStop(1, '#b8ecff00'); polygon([[x - 46, 115], [x + 46, 115], [x + 300, 540], [x - 300, 540]], glow);
            }
            rect(0, 454, W, 40, '#0b1425'); line(0, 454, W, 454, '#89efee', 2);
            for (let i = 0; i < Math.ceil(W / 205); i++) { text(i % 2 ? homeTeam.name : 'GOLBOL', 95 + i * 205, 479, 12, i % 2 ? '#e0e8ff' : '#b5a0ff'); line(i * 205 + 195, 462, i * 205 + 195, 484, venue.seat); }
            const grass = c.createLinearGradient(0, 494, 0, H); grass.addColorStop(0, day ? '#4d973d' : '#256c4b'); grass.addColorStop(.4, day ? '#65aa45' : '#38864e'); grass.addColorStop(1, day ? '#347231' : '#174b35'); rect(0, 494, W, 166, grass);
            for (let i = 0; i < 12; i++)polygon([[i * 100 + 25, 494], [(i + 1) * 100 + 25, 494], [(i + 1) * 100 - 30, 660], [i * 100 - 30, 660]], i % 2 ? '#ffffff05' : '#00000009');
            for (let i = 0; i < 750; i++) { const x = (i * 157.31) % W, y = 498 + (i * 43.13) % 160; line(x, y, x + 2, y - 2, '#b9e7a811', .7); }
            c.strokeStyle = '#d1efe769'; c.lineWidth = 2; c.beginPath(); c.ellipse(600, 558, 137, 44, 0, 0, Math.PI * 2); c.stroke();
            line(600, 497, 600, 650, '#d1efe769', 2); line(24, 627, 1176, 627, '#d1efe769', 2); line(24, 497, 1176, 497, '#d1efe733', 2);
            line(0, 515, 135, 515, '#d1efe769', 2); line(135, 515, 105, 616, '#d1efe769', 2); line(105, 616, 0, 616, '#d1efe769', 2);
            line(1200, 515, 1065, 515, '#d1efe769', 2); line(1065, 515, 1095, 616, '#d1efe769', 2); line(1095, 616, 1200, 616, '#d1efe769', 2);
            line(0, FLOOR + 2, W, FLOOR + 2, '#b1dfb451', 2);
            window.ArenaPresentationArt?.stadium(c,{day,seat:venue.seat});
            const vignette = c.createRadialGradient(600, 330, 170, 600, 330, 740); vignette.addColorStop(0, '#00000000'); vignette.addColorStop(1, day ? '#14364918' : '#04122780'); rect(0, 0, W, H, vignette);
        } c.restore();
        stadiumCache = document.createElement('canvas'); stadiumCache.width=Math.max(1,Math.round(W*renderScale));stadiumCache.height=Math.max(1,Math.round(H*renderScale));stadiumCache.getContext('2d').drawImage(canvas,viewOffsetX,viewOffsetY,W*renderScale,H*renderScale,0,0,stadiumCache.width,stadiumCache.height);
    }
    function drawTrainingFacility() {
        c.save(); c.scale(W / 1200,1);
        const sky=c.createLinearGradient(0,0,0,494);sky.addColorStop(0,'#81c7ec');sky.addColorStop(1,'#edf6d9');rect(0,0,1200,H,sky);
        circle(1010,100,30,'#fff2b3');
        for(const x of [120,490,790]){ellipse(x,105,70,15,'#ffffff99');ellipse(x+20,95,40,15,'#ffffff99');}
        polygon([[0,330],[140,245],[300,328],[450,250],[650,335],[850,240],[1050,310],[1200,255],[1200,460],[0,460]],'#91ad77');
        rect(0,370,1200,125,'#66905a');
        for(let x=25;x<1200;x+=90){line(x,375,x,280,'#645e46',9);circle(x,280,35,'#507847');circle(x+20,295,30,'#5f8d4c');}
        round(405,293,390,135,6,'#e5e8de','#8ba297');rect(405,285,390,14,'#426d61');
        for(let x=425;x<760;x+=68)round(x,320,47,44,3,'#6e9cac','#d8eee9');
        rect(560,376,75,52,'#4d7369');text('ANTRENMAN TESİSLERİ',600,310,14,'#254e43');
        line(0,433,1200,433,'#b0c6b5',3);line(0,474,1200,474,'#b0c6b5',2);
        for(let x=0;x<1200;x+=45)line(x,420,x,485,'#8ca79a',2);
        rect(0,485,1200,175,'#61974d');
        for(let x=0;x<1200;x+=100)rect(x,494,50,166,'#ffffff06');
        line(25,497,1175,497,'#dcefd0',2);line(25,628,1175,628,'#dcefd0',2);line(600,497,600,650,'#dcefd066',2);
        c.beginPath();c.ellipse(600,558,137,44,0,0,Math.PI*2);c.strokeStyle='#dcefd066';c.lineWidth=2;c.stroke();
        for(const x of [850,925,1000]){polygon([[x-8,491],[x,470],[x+8,491]],'#ef9348');ellipse(x,492,11,3,'#d96930');}
        c.restore();
        stadiumCache=document.createElement('canvas');stadiumCache.width=Math.max(1,Math.round(W*renderScale));stadiumCache.height=Math.max(1,Math.round(H*renderScale));stadiumCache.getContext('2d').drawImage(canvas,viewOffsetX,viewOffsetY,W*renderScale,H*renderScale,0,0,stadiumCache.width,stadiumCache.height);
    }
    const benchPaintCache=[null,null];
    function paintSeatedPlayers(seated,team,side,x,y){
        seated.forEach((star,i)=>{
            const px=x-80+i*80;
            c.save();c.translate(px,y+12);c.scale(.51*PLAYER_VISUAL_SCALE,.51*PLAYER_VISUAL_SCALE*1.08);
            c.save();c.beginPath();c.rect(-70,-170,140,133);c.clip();
            drawPlayerAtSize({...makePlayer(side),i:-100-side*10-i,star,x:0,y:0,kick:0,walk:0,stun:0,immune:0,hitFlash:0,celebrating:false},true);c.restore();
            line(-12,-35,-23,-20,team.kit?.shorts||team.dark,14);line(12,-35,24,-20,team.kit?.shorts||team.dark,14);
            line(-23,-20,-23,2,star.skin,9);line(24,-20,24,2,star.skin,9);
            line(-24,3,-13,3,'#eff3fa',6);line(24,3,35,3,'#eff3fa',6);c.restore();
            text(star.name+(withdrawn[side].has(star)?' · ÇIKTI':''),px,y+26,10,withdrawn[side].has(star)?'#a8b0c0':'#e8efff');
        });
    }
    function drawSeatedPlayers(seated,team,side,x,y){
        const key=[selection[side].team,renderScale,document.fonts?.status,portraitAtlas.naturalWidth,correctedPortraits.naturalWidth,team.crestImage?.naturalWidth,...seated.map(star=>star.name+':'+withdrawn[side].has(star)+':'+getAtlas(star.gamePortrait?.sheet)?.naturalWidth)].join('|');
        let entry=benchPaintCache[side];
        if(entry?.key!==key){
            const surface=document.createElement('canvas');surface.width=Math.ceil(340*renderScale);surface.height=Math.ceil(156*renderScale);
            const original=c;c=surface.getContext('2d');
            try{c.scale(renderScale,renderScale);c.translate(170,104);paintSeatedPlayers(seated,team,side,0,0);}finally{c=original;}
            entry={key,surface};benchPaintCache[side]=entry;
        }
        c.drawImage(entry.surface,x-170,y-104,340,156);
    }
    function drawSidelines() {
        if(training){
            benches[0].forEach((star,i)=>{
                c.save();c.translate(W*.25+i*95,487);c.scale(.51,.51);
                drawPlayerAtSize({...makePlayer(0),star,x:0,y:0,isMotorcycle:false,takingPenalty:true,kick:0,walk:0,stun:0,immune:0,hitFlash:0,celebrating:false},true);c.restore();
                text(star.name,W*.25+i*95,510,11,'#ffffff');
            });return;
        }
        for (const side of (training ? [0] : [0, 1])) {
            const team = teams[selection[side].team], x = W * (side ? .70 : .30), y = 447;
            round(x - 135, y - 75, 270, 104, 15, '#162b40ee', team.color);
            round(x - 125, y - 65, 250, 48, 10, matchLight === 'day' ? '#95bbce66' : '#507caa44');
            for (let i = 0; i < 3; i++) { round(x - 104 + i * 80, y - 26, 47, 39, 7, team.color); line(x - 104 + i * 80, y + 17, x - 58 + i * 80, y + 17, '#081629', 5); }
            const seated = [...benches[side], ...withdrawn[side]].filter(star => !(shootout && penalty?.side === side && penalty.taker.star === star));
            drawSeatedPlayers(seated,team,side,x,y);
            const coachX = x + (side ? -175 : 175);
            if (!(shootout && penalty?.side === side && penalty.taker.isCoach)) window.GolbolWorld?.coach(c, team.coach, coachX, 495, side, clock, state === 'playing' && !reducedMotion, matchLight === 'day', team);
            round(coachX - 90, 499, 180, 22, 5, '#0a1428e8'); text(team.coach.name, coachX, 514, 12, '#e7ddff');
        }
    }
    function net(x, flip, color) {
        c.save(); c.translate(x, 0); c.scale(flip, 1);
        const GOAL_TOP=goalTop(flip<0?1:0);
        rect(0, GOAL_BOTTOM, 72, FLOOR - GOAL_BOTTOM + 5, '#233d49'); line(0, GOAL_BOTTOM, 72, GOAL_BOTTOM, '#83a1ae', 3);
        polygon([[4, GOAL_TOP + 20], [57, GOAL_TOP], [57, GOAL_BOTTOM], [4, GOAL_BOTTOM + 8]], '#e1f7ff09');
        for (let i = 7; i <= 57; i += 10)line(i, GOAL_TOP + (57 - i) * .38, i, GOAL_BOTTOM + (57 - i) * .15, '#cfe7f945', 1);
        for (let y = GOAL_TOP + 20; y < GOAL_BOTTOM; y += 12)line(4, y + 4, 57, y - 7, '#cfe7f945', 1);
        line(4, GOAL_TOP + 20, 57, GOAL_TOP, '#8ea8ba', 4); line(4, GOAL_TOP + 20, 4, GOAL_BOTTOM + 8, '#8ea8ba', 4);
        line(57, GOAL_TOP, 57, GOAL_BOTTOM, '#cfe7f945', 1);
        c.shadowColor = color; c.shadowBlur = 12; line(3, GOAL_TOP, 57, GOAL_TOP, '#f5fbff', POST_RADIUS * 2); c.shadowBlur = 0;
        line(57, GOAL_BOTTOM - 24, 57, GOAL_BOTTOM, '#f5fbff', POST_RADIUS * 2);
        rect(53, GOAL_BOTTOM - 12, 8, 12, color); c.restore();
    }
    function badge(x, y, t, size = 36) {
        size *= t.crestScale || 1;
        const image = t.crestImage || crestImages[teams.indexOf(t)];
        if (image?.complete && image.naturalWidth) { const ratio = image.naturalWidth / image.naturalHeight; c.drawImage(image, x - size * ratio / 2, y - size / 2, size * ratio, size); return; }
        c.save(); c.translate(x, y); c.scale(size / 36, size / 36);
        polygon([[-18, -21], [18, -21], [16, 10], [0, 22], [-16, 10]], t.dark, '#ffffffa0');
        polygon([[-14, -17], [-2, -17], [-2, 17], [-12, 7]], t.color); polygon([[3, -17], [14, -17], [12, 7], [3, 14]], t.color);
        text(t.short, 0, 4, 10); star(0, -13, 3, '#f4d67f'); c.restore();
    }
    // Chin anchors measured from opaque jaw pixels, not transparent atlas padding.
    const headAnchors = { "assets/player-heads-europe.png": [[0.59324, 0.96166, 0.05750798722044728, 0.9712460063897763], [0.53993, 0.98403, 0.054313099041533544, 0.9936102236421726], [0.46288, 0.97764, 0.0670926517571885, 0.987220447284345], [0.41044, 0.98083, 0.09584664536741214, 0.9904153354632588], [0.59853, 0.93291, 0.03514376996805112, 0.9424920127795527], [0.52998, 0.94249, 0.025559105431309903, 0.952076677316294], [0.45295, 0.91693, 0.04472843450479233, 0.9265175718849841], [0.42572, 0.92013, 0.03194888178913738, 0.9297124600638977], [0.59157, 0.91693, 0, 0.9265175718849841], [0.52544, 0.89457, 0, 0.9041533546325878], [0.46648, 0.8754, 0, 0.8849840255591054], [0.43376, 0.89457, 0, 0.9041533546325878], [0.57548, 0.86901, 0, 0.8785942492012779], [0.54457, 0.85942, 0, 0.8690095846645367], [0.45826, 0.85304, 0, 0.8626198083067093], [0.43848, 0.90735, 0, 0.9169329073482428]], "assets/player-heads-extra-b.png": [[0.52361, 0.94249, 0.0670926517571885, 0.952076677316294], [0.50491, 0.9393, 0.04792332268370607, 0.9488817891373802], [0.50541, 0.94888, 0.07987220447284345, 0.9584664536741214], [0.51247, 0.97764, 0.04792332268370607, 0.987220447284345], [0.53633, 0.9393, 0.03514376996805112, 0.9488817891373802], [0.52865, 0.94249, 0.012779552715654952, 0.952076677316294], [0.49221, 0.92652, 0.038338658146964855, 0.9361022364217252], [0.4897, 0.92013, 0.04153354632587859, 0.9297124600638977], [0.53468, 0.92332, 0.019169329073482427, 0.9329073482428115], [0.49691, 0.95208, 0.009584664536741214, 0.9616613418530351], [0.52203, 0.92013, 0.012779552715654952, 0.9297124600638977], [0.49607, 0.94888, 0.019169329073482427, 0.9584664536741214], [0.52559, 0.89776, 0, 0.9073482428115016], [0.51322, 0.91054, 0, 0.9201277955271565], [0.51572, 0.90096, 0.003194888178913738, 0.9105431309904153], [0.51147, 0.89776, 0.003194888178913738, 0.9073482428115016]], "assets/player-heads-extra-a-leao.png": [[0.55906, 0.99681, 0.10543130990415335, 1], [0.54847, 0.99681, 0.038338658146964855, 1], [0.55273, 0.99681, 0.11182108626198083, 1], [0.51289, 0.99681, 0.08306709265175719, 1], [0.54588, 0.94569, 0.07028753993610223, 0.9552715654952076], [0.57596, 0.99681, 0.05750798722044728, 1], [0.55726, 0.99681, 0.08306709265175719, 1], [0.54478, 0.98083, 0.06389776357827476, 0.9904153354632588], [0.58032, 0.97444, 0.025559105431309903, 0.9840255591054313], [0.57998, 0.96166, 0.025559105431309903, 0.9712460063897763], [0.52244, 0.94249, 0.04792332268370607, 0.952076677316294], [0.54889, 0.97125, 0.04153354632587859, 0.9808306709265175], [0.57852, 0.91693, 0, 0.9265175718849841], [0.5765, 0.92013, 0, 0.9297124600638977], [0.55551, 0.94569, 0, 0.9552715654952076], [0.5264, 0.91374, 0, 0.9233226837060703]], "assets/player-heads.png": [[0.55471, 0.94937, 0.08227848101265822, 0.9588607594936709], [0.53265, 0.95253, 0.08860759493670886, 0.9620253164556962], [0.5048, 0.94304, 0.10443037974683544, 0.9525316455696202], [0.46318, 0.93671, 0.07278481012658228, 0.9462025316455697], [0.56224, 0.95, 0.023333333333333334, 0.96], [0.52372, 0.92333, 0.043333333333333335, 0.9333333333333333], [0.50657, 0.95, 0.02666666666666667, 0.96], [0.46488, 0.98667, 0.01, 0.9966666666666667], [0.53413, 0.96721, 0.02622950819672131, 0.9770491803278688], [0.53687, 0.96066, 0.022950819672131147, 0.9704918032786886], [0.50503, 0.94426, 0.036065573770491806, 0.9540983606557377], [0.48655, 0.95082, 0.05573770491803279, 0.9606557377049181], [0.55128, 0.88889, 0.02702702702702703, 0.8978978978978979], [0.52723, 0.87087, 0.03903903903903904, 0.8798798798798799], [0.51173, 0.85886, 0.024024024024024024, 0.8678678678678678], [0.48155, 0.84985, 0.024024024024024024, 0.8588588588588588]], "assets/player-heads-corrected.png": [[0.55014, 0.9697, 0.09569377990430622, 0.9744816586921851], [0.46049, 0.94418, 0.09090909090909091, 0.94896331738437], [0.53076, 0.94737, 0.01594896331738437, 0.9521531100478469], [0.46697, 0.94577, 0.01594896331738437, 0.9505582137161085]], "assets/training-keeper-head.png": [[0.49734, 0.97767, 0.029505582137161084, 0.9800637958532695]] };
    function drawAnchoredHead(image, sx, sy, sw, sh, sheet, cell) {
        const [ax, ay, top, bottom] = headAnchors[sheet][cell];
        // Center the chin directly on the shirt collar, with no visible neck.
        portraitImage(image, sx, sy + top * sh, sw, (bottom - top) * sh, -ax * 88, -57 + (top - ay) * 96, 88, (bottom - top) * 96);
    }
    const penaltyCoachKit={coachSuit:true,shirt:'#202a38',shorts:'#202a38',trim:'#354355',collar:'#f1f3f8',brand:'none',sponsor:'none'};
    function penaltyPlayer(p) {
        // Keep roster roles for the shootout labels, but use the field-player body and kick.
        const star = p.isCoach ? {...p.star,kit:penaltyCoachKit,number:0,portrait:-1,style:'short',gamePortrait:p.star.head ? {sheet:p.star.head.sheet,crop:p.star.head.crop,cell:0,columns:1,rows:1,circleHead:p.star.head.roundHead,transparentHead:!p.star.head.roundHead,headAnchor:[.5,1,0,1]} : p.star.gamePortrait} : p.star;
        return {...p,star,isCoach:false,isKeeper:false,immune:0,injury:0,hitFlash:0};
    }
    // Celebration movement is visual only; restart positions and ball physics stay intact.
    function celebrationPlayer(p) {
        if (!celebration || !['playing','result'].includes(state) || state === 'playing' && goalWait <= 0 || p.side !== celebration.side) return p;
        const elapsed = Math.max(0, clock - celebration.started), lead = p.i === celebration.scorer;
        const style = lead ? celebration.style : 2;
        const progress = reducedMotion ? 0 : Math.min(1, elapsed / 1.1);
        const center = W * (p.side === 0 ? .4 : .6);
        const slot = p.isKeeper ? -150 : lead ? 0 : 110;
        return {...p, x:p.x+(center+slot-p.x)*progress, y:FLOOR, kick:0, slide:0, celebrating:true, celebrationStyle:style, celebrationTime:reducedMotion?0:elapsed, dir:lead?1:-1};
    }
    function drawPlayer(p, hero = false) {
        if (!hero) p = celebrationPlayer(p);
        const takingPenalty = penalty?.taker === p;
        p = {...p,motorcycle:isMotorcyclePlayer(p)};
        if (takingPenalty) p = penaltyPlayer(p);
        if (p.isCoach) {
            window.GolbolWorld?.coach(c, p.star, p.x, p.y, p.side, clock, false, matchLight === 'day', p.team, p.kick);
            return;
        }
        c.save(); c.translate(p.x, p.y);
        c.scale(PLAYER_VISUAL_SCALE*heroSize(p), PLAYER_VISUAL_SCALE * heroSize(p) * (p.isKeeper ? 1 : 1.08));
        c.translate(-p.x, -p.y);
        drawPlayerAtSize(p, hero);
        c.restore();
        if(senSession?.team&&!hero&&!p.isKeeper){c.save();c.fillStyle=p.side===0?'#7ae1ff':'#ffbd75';c.beginPath();c.arc(p.x,p.y-175,15,0,Math.PI*2);c.fill();c.fillStyle='#10251f';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('P'+(p.controller+1),p.x,p.y-170);c.restore();}
    }
    function drawPlayerAtSize(p, hero = false) {
        const s = p.star, t = p.team, reaction = p.celebrating ? 'win' : !hero && goalWinner >= 0 && goalWait > 0 ? (p.side === goalWinner ? 'win' : 'lose') : '', stun = !reaction && p.stun > 0;
        c.save(); c.translate(p.x, p.y);
        ellipse(0, FLOOR - p.y + 4, 39, 8, '#051e2960');
        if (p.isKeeper && !reaction && p.savePose > 0 && ['dive', 'save'].includes(p.keeperAction)) { c.translate(0, -55); c.rotate(p.dir * Math.sin(Math.min(1, p.savePose / .55) * Math.PI) * .85); c.translate(0, 55); }
        if (!reaction && p.kick > 0 && p.action === 'bicycle') { c.translate(0, -65); c.rotate(-p.kickDir * Math.sin((KICK_DURATION - p.kick) / KICK_DURATION * Math.PI) * 2.7); c.translate(0, 65); }
        if (!reaction && p.kick > 0 && p.action === 'header') c.translate(p.kickDir * Math.sin((KICK_DURATION - p.kick) / KICK_DURATION * Math.PI) * 14, -5);
        if (reaction === 'win' && !reducedMotion) {
            const phase = p.celebrationTime ?? clock;
            if (p.celebrationStyle === 0) { c.translate(0, -Math.max(0, Math.sin(phase * 6)) * 34); c.rotate(Math.sin(phase * 6) * .07); }
            else if (p.celebrationStyle === 1) { c.translate(0, 22); c.rotate(-p.dir * .16); }
            else c.translate(0, -Math.abs(Math.sin(phase * 7)) * 14);
        }
        if (p.immune > 0 && !stun && !hero) { c.globalAlpha = .65 + .35 * Math.sin(clock * 23); c.shadowColor = '#94e9ff'; c.shadowBlur = 8; }
        if (stun) { c.translate(0, -12); c.rotate(-p.dir * 1.28); c.translate(0, 36); }
        if (!reaction && p.slide > 0) {
            if(p.motorcycle){c.translate(-34*p.dir,20);c.rotate(-p.dir*.55);c.translate(34*p.dir,-20);}
            else { c.translate(0, 5); c.rotate(-p.dir * .8); }
        }
        const age = KICK_DURATION - p.kick;
        let swing = !reaction && p.kick > 0 && p.action !== 'header' ? (age < HIT_TIME ? -Math.sin(age / HIT_TIME * Math.PI / 2) * .7 : Math.sin(clamp((age - HIT_TIME) / .32, 0, 1) * Math.PI) * 1.65) : 0;
        if(!reaction&&p.kick>0&&!p.isKeeper&&s.senAppearance){const style=s.senAppearance.shotStyle||0,phase=Math.sin(Math.min(1,age/KICK_DURATION)*Math.PI);if(style===1){c.translate(p.kickDir*phase*7,-phase*3);swing*=.78;}else if(style===2){c.rotate(-p.kickDir*phase*.13);swing*=1.2;}else if(style===3){c.translate(-p.kickDir*phase*5,-phase*7);c.rotate(p.kickDir*phase*.1);}}
        const bob = p.y === FLOOR && !stun && !reaction && Math.abs(p.vx) > 1 ? Math.sin(p.walk * 2) * 1.6 : 0;
        c.translate(0, bob); if (p.kick > 0) c.rotate(-p.kickDir * swing * .08);
        const run = reaction || p.kick > 0 ? 0 : p.y === FLOOR ? (Math.abs(p.vx) > 1 ? Math.sin(p.walk) * .45 : 0) : .25;
        const facing = p.kick > 0 ? p.kickDir : p.dir;
        c.scale(facing, 1);
        window.ArenaKitRenderer.draw(c, s===p.star?p:{...p,star:s}, { swing, run, facing, reaction, celebrationStyle:p.celebrationStyle, celebrationTime:p.celebrationTime, keeperThrow: p.isKeeper && p.savePose > 0 && p.keeperAction === 'throw', keeperSave: p.isKeeper && p.savePose > 0 && !['pass', 'throw'].includes(p.keeperAction) });
        if (p.injury > 0) { round(3, -17, 12, 7, 2, '#f3eddb'); line(7, -15, 12, -12, '#d85b61', 2); }
        if(s.senAppearance)window.ArenaSenAppearance?.details(c,s.senAppearance);
        c.translate(0, reaction === 'lose' ? 1 : -5);
        const extraPortrait = s.gamePortrait, extraAtlas = getAtlas(extraPortrait?.sheet);
        c.save();
        // Some reference heads face left at rest; mirror just the head around its chin anchor.
        if(extraPortrait?.flipHorizontal)c.scale(-1,1);
        const hasPortrait = s.portrait >= 0 && portraitAtlas.complete && portraitAtlas.naturalWidth > 0;
        if (s.senAppearance) { window.ArenaSenAppearance?.drawHead(c,s.senAppearance); }
        else if (extraAtlas?.complete && extraAtlas.naturalWidth) {
            const { cell, columns, rows } = extraPortrait;
            const crop = extraPortrait.crop || [cell % columns / columns, Math.floor(cell / columns) / rows, 1 / columns, 1 / rows];
            const sw = extraAtlas.naturalWidth * crop[2], sh = extraAtlas.naturalHeight * crop[3];
            c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high';
            if (extraPortrait.circleHead) {
                c.save();c.beginPath();c.ellipse(0,-96,34,38,0,0,Math.PI*2);c.clip();
                portraitImage(extraAtlas, crop[0] * extraAtlas.naturalWidth, crop[1] * extraAtlas.naturalHeight, sw, sh, -36, -134, 72, 80);
                c.restore();
            } else if (extraPortrait.transparentHead) {
                const [ax, ay, top, bottom] = extraPortrait.headAnchor;
                portraitImage(extraAtlas, crop[0] * extraAtlas.naturalWidth, crop[1] * extraAtlas.naturalHeight + top * sh,
                    sw, (bottom - top) * sh, -ax * 88, -57 + (top - ay) * 96, 88, (bottom - top) * 96);
            } else if (extraPortrait.anchor) {
                const height = 104, width = height * sw / sh, bottom = extraPortrait.collarAligned ? -57 : -67;
                c.save(); c.beginPath(); c.ellipse(0, bottom - height / 2, width / 2, height / 2, 0, 0, Math.PI * 2); c.clip();
                portraitImage(extraAtlas, crop[0] * extraAtlas.naturalWidth, crop[1] * extraAtlas.naturalHeight, sw, sh, -width / 2, bottom - height, width, height);
                c.restore();
            } else drawAnchoredHead(extraAtlas, crop[0] * extraAtlas.naturalWidth, crop[1] * extraAtlas.naturalHeight, sw, sh, extraPortrait.sheet, cell);
        } else if (hasPortrait) {
            c.imageSmoothingEnabled = true; c.imageSmoothingQuality = 'high';
            if (Object.hasOwn(correctedCells, s.portrait) && correctedPortraits.complete && correctedPortraits.naturalWidth > 0) {
                const cell = correctedCells[s.portrait], sw = correctedPortraits.naturalWidth / 2, sh = correctedPortraits.naturalHeight / 2;
                drawAnchoredHead(correctedPortraits, cell % 2 * sw, Math.floor(cell / 2) * sh, sw, sh, 'assets/player-heads-corrected.png', cell);
            } else {
                const cellW = portraitAtlas.naturalWidth / 4, [top, height] = portraitRows[Math.floor(s.portrait / 4)], ratio = portraitAtlas.naturalHeight / 1254;
                drawAnchoredHead(portraitAtlas, (s.portrait % 4) * cellW, top * ratio, cellW, height * ratio, 'assets/player-heads.png', s.portrait);
            }
            if (stun) { c.save(); c.globalAlpha = .8; for (const x of [-13, 13]) { line(x - 4, -100, x + 4, -92, '#ffe08a', 2); line(x + 4, -100, x - 4, -92, '#ffe08a', 2); } c.restore(); }
        } else {
            circle(-31, -83, 7, s.skin); circle(31, -83, 7, s.skin);
            const skin = c.createRadialGradient(-12, -96, 2, 0, -82, 39); skin.addColorStop(0, '#ffe0be'); skin.addColorStop(.25, s.skin); skin.addColorStop(1, s.skin);
            c.beginPath(); c.ellipse(0, -85, 33, 35, 0, 0, Math.PI * 2); c.fillStyle = skin; c.fill(); c.strokeStyle = '#2b23334d'; c.lineWidth = 2; c.stroke();
            ellipse(20, -74, 8, 4, '#bd644522');
            if (s.style === 'beard') { c.beginPath(); c.arc(0, -79, 29, 0, Math.PI); c.lineTo(-22, -72); c.quadraticCurveTo(0, -53, 22, -72); c.fillStyle = s.hair; c.fill(); }
            c.beginPath(); c.moveTo(-31, -85); c.bezierCurveTo(-39, -121, -13, -128, 9, -120); c.bezierCurveTo(39, -123, 38, -100, 31, -89); c.lineTo(25, -103); c.quadraticCurveTo(0, -96, -21, -104); c.lineTo(-27, -87); c.closePath(); c.fillStyle = s.hair; c.fill();
            if (s.style === 'quiff') polygon([[-28, -105], [-20, -129], [-6, -121], [11, -133], [27, -119], [31, -105]], s.hair);
            if (s.style === 'curl') for (let i = 0; i < 7; i++)circle(-26 + i * 8, -111 - Math.sin(i / 6 * Math.PI) * 11, 7, s.hair);
            if (s.style === 'tail') { circle(-33, -104, 10, s.hair); line(-35, -103, -39, -88, s.hair, 9); }
            if (s.style === 'crop') { line(-21, -112, 20, -112, '#ffffff15', 2); }
            if (s.style === 'mask') round(-28, -92, 56, 20, 6, '#212632');
            if (stun) { for (const x of [-13, 13]) { line(x - 5, -90, x + 5, -80, '#283039', 3); line(x + 5, -90, x - 5, -80, '#283039', 3); } }
            else {
                for (const x of [-13, 13]) { round(x - 9, -92, 18, 13, 5, '#fff8ec'); ellipse(x + 3, -85, 4, 5, '#263548'); circle(x + 3 + 1, -87, 1.3, 'white'); }
                line(-23, -97, -5, -94, s.hair, 3); line(7, -94, 24, -97, s.hair, 3);
            }
            line(1, -83, -1, -75, '#925b4560', 2);
            if (stun) ellipse(0, -63, 5, 4, '#744438'); else { round(-7, -68, 18, 6, 2, '#fff4e7'); line(-7, -61, 11, -61, '#713f3a', 1.5); }
        }
        c.restore();
        if (reaction === 'lose') {
            for (const side of [-1, 1]) { const drop = (clock * 26 + (side + 1) * 7) % 25; ellipse(side * 18, -96 + drop, 2.6, 5, '#75d7ff'); }
        }
        if (p.hitFlash > 0) { c.globalAlpha = .35; ellipse(0, -91, 34, 39, '#fff'); c.globalAlpha = 1; }
        c.restore();
        if (hero) return;
        if (p.isKeeper) { text('KALECİ', p.x, p.y - 150, 9, '#94efdc'); return; }
        if (p.injury > 0) text('✚ SAKAT · ' + Math.ceil(p.injury) + 's', p.x, p.y - 184, 10, '#ff9494');
        if (p.kick > 0 && age > HIT_TIME && age < .32) {
            c.save(); c.translate(p.x, p.y - 28); c.scale(p.kickDir, 1); c.globalAlpha = Math.sin((age - HIT_TIME) / .2 * Math.PI) * .7;
            c.beginPath(); c.arc(0, 0, 69, -1.05, .28); c.strokeStyle = p.kickSuper ? '#d9ff66' : '#d8f7ff'; c.lineWidth = 4; c.stroke(); c.beginPath(); c.arc(0, 0, 78, -.8, .1); c.lineWidth = 2; c.stroke(); c.restore();
        }
        if (stun) {
            for (let i = 0; i < 3; i++) { const angle = clock * 5 + i * Math.PI * 2 / 3; star(p.x + Math.cos(angle) * 30, p.y - 75 + Math.sin(angle) * 9, 7, '#ffe08a'); }
            round(p.x - 32, p.y - 100, 64, 13, 5, '#17263a'); rect(p.x - 28, p.y - 96, 56 * (p.stun / STUN_DURATION), 4, '#ffce76');
        } else {
            round(p.x - 49, p.y - 172, 98, 19, 5, '#0b172bdd'); text(s.name + ' · ' + (s.overall || 78), p.x, p.y - 159, 10, '#e3efff');
            if (p.immune > 0) text('KORUMA', p.x, p.y - 181, 9, '#95e6ff');
            polygon([[p.x - 4, p.y - 149], [p.x + 4, p.y - 149], [p.x, p.y - 144]], p.controller === 0 ? '#d9ff66' : '#8bcfff');
        }
    }
    function drawBall() {
        ellipse(ball.x, FLOOR + 3, Math.max(7, 19 - (FLOOR - ball.y) * .02), 5, '#09272a50');
        const effectColors = { kick: '#7cecff', header: '#ffd58d', bicycle: '#c796ff', super: '#d9ff66' };
        for (let i = 1; i < trail.length; i++) {
            const t = trail[i], prev = trail[i - 1]; if (!t.effect) continue;
            c.globalAlpha = i / trail.length * .6; line(prev.x, prev.y, t.x, t.y, effectColors[t.effect], 2 + i * .35);
        }
        c.globalAlpha = 1;
        for (const e of shotEffects) {
            const progress = 1 - e.life / e.max, r = 20 + progress * (e.kind === 'bicycle' ? 115 : 70), color = effectColors[e.kind];
            c.save(); c.globalAlpha = e.life / e.max; c.translate(e.x, e.y);
            if (e.kind === 'bicycle') {
                for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(0, 0, r + i * 9, progress * 4 + i, progress * 4 + i + 2.4); c.strokeStyle = i ? '#f3deff' : color; c.lineWidth = 4; c.stroke(); }
            } else if (e.kind === 'header') {
                c.beginPath(); c.arc(0, 0, r, 0, Math.PI * 2); c.strokeStyle = color; c.lineWidth = 4; c.stroke();
                for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; line(Math.cos(a) * r, Math.sin(a) * r, Math.cos(a) * (r + 12), Math.sin(a) * (r + 12), color, 3); }
            } else {
                c.scale(e.dir, 1); for (const offset of [-18, 0, 18]) line(-r, offset, 10, offset * .3, color, 3);
                polygon([[10, -18], [35, 0], [10, 18], [20, 0]], '#f0fbff');
            }
            c.restore();
        }
        for (let i = 0; i < trail.length; i++) { const t = trail[i]; if (t.fire > 0) { c.globalAlpha = i / trail.length * .4; circle(t.x, t.y, 5 + i * .65, '#dbff66'); } } c.globalAlpha = 1;
        if (ball.fire > 0) {
            c.save(); c.globalAlpha = .75;
            for (let i = 0; i < 3; i++) {
                const angle = reducedMotion ? i : clock * (i % 2 ? -9 : 9) + i;
                c.beginPath(); c.arc(ball.x, ball.y, 25 + i * 9, angle, angle + 3.8);
                c.strokeStyle = ['#ffffff', '#55dfff', '#d9ff66'][i]; c.lineWidth = 3; c.stroke();
            }
            c.restore();
        }
        for (const p of players) if (p.superPulse > 0 && !reducedMotion) {
            c.save(); c.globalAlpha = p.superPulse; c.beginPath();
            c.arc(p.x, p.y - 45, 35 + (1 - p.superPulse / .65) * 130, 0, Math.PI * 2);
            c.strokeStyle = '#55dfff'; c.lineWidth = 5; c.stroke(); c.restore();
        }
        c.save(); c.translate(ball.x, ball.y); c.rotate(ball.spin);
        if (ball.fire > 0) { c.shadowColor = '#d9ff66'; c.shadowBlur = 25; }
        const light = c.createRadialGradient(-6, -7, 1, 0, 0, 19); light.addColorStop(0, '#ffffff'); light.addColorStop(.65, '#e7eff5'); light.addColorStop(1, '#8b9db2'); circle(0, 0, 17, light); c.shadowBlur = 0;
        c.beginPath(); c.arc(0, 0, 17, 0, Math.PI * 2); c.clip();
        for (let j = 0; j < 6; j++) { const angle = j * Math.PI * 2 / 5, rr = j === 5 ? 0 : 16, pts = []; for (let k = 0; k < 5; k++) { const a = k * Math.PI * 2 / 5; pts.push([Math.cos(angle) * rr + Math.cos(a) * 5.5, Math.sin(angle) * rr + Math.sin(a) * 5.5]); } polygon(pts, '#243b52'); }
        c.restore();
    }
    function scoreboard() {
        c.save(); c.translate((W - 1200) / 2, 0);
        round(244, 20, 712, 81, 12, '#071223ee', '#4a668254');
        round(472, 12, 256, 17, 4, '#d9ff66'); text('Y I L D I Z L A R   L İ G İ', 600, 24, 9, '#1d2b22');
        for (let i = 0; i < 2; i++) {
            const p = (training ? players.find(q => q.controller === 0) : players[i]) || players[0], x = i === 0 ? 292 : 908, tx = i === 0 ? 328 : 872, align = i === 0 ? 'left' : 'right';
            if (training && i === 1) { text('HEDEF \u00c7ALI\u015eMASI', tx, 58, 13, '#91abc6', align); continue; }
            badge(x, 58, p.team, 29); text(p.team.name, tx, 51, 13, '#e7effc', align); text(p.star.name.toLocaleUpperCase('tr') + ' · OVR ' + (p.star.overall || 78), tx, 72, 10, '#91abc6', align);
            line(i === 0 ? 261 : 939, 37, i === 0 ? 261 : 939, 83, p.team.color, 3);
        }
        round(510, 30, 180, 52, 6, '#15283e'); text(String(score[0]), 545, 68, 38); text(':', 600, 62, 24, '#7690aa'); text(String(score[1]), 655, 68, 38);
        const remaining = suddenDeath ? Math.floor(time) : Math.ceil(time), timer = `${Math.floor(remaining / 60).toString().padStart(2, '0')}:${(remaining % 60).toString().padStart(2, '0')}`;
        round(556, 86, 88, 26, 6, !suddenDeath && time <= 15 ? '#9d3547' : '#203953', '#6887a655'); text(training ? '∞' : suddenDeath ? '+' + timer : timer, 600, 104, 15, time <= 15 ? '#fff' : '#d9ff66');
        if (!training && !shootout) { text('KORNER ' + (corners[1] % 3) + '/3', 435, 103, 12, '#d9ff66'); text('KORNER ' + (corners[0] % 3) + '/3', 765, 103, 12, '#8bcfff'); }
        if (matchPhase === 'extra') text('UZATMALAR', 600, 132, 12, '#ffda80');
        if (shootout) {
            round(350, 113, 500, 82, 8, '#0a192aee');
            text('PENALTILAR  ' + shootout.score[0] + ' : ' + shootout.score[1], 600, 137, 18, '#ffda80');
            const marks = side => shootout.history[side].slice(-10).map(scored => scored ? '●' : '×').join(' ');
            text(marks(0) || '—', 475, 163, 14, '#d9ff66'); text(marks(1) || '—', 725, 163, 14, '#8bcfff');
            if (penalty) text('VURUŞ ' + (shootout.attempts[penalty.side] + 1) + ' · ' + penalty.taker.star.name + (penalty.taker.isKeeper ? ' · KALECİ' : penalty.taker.isCoach ? ' · TEKNİK DİREKTÖR' : ''), 600, 187, 12, '#d9ff66');
        }
        text('● CANLI', 78, 45, 10, '#d9ff66'); text(matchLight === 'day' ? 'GÜNDÜZ' : 'GECE', 1124, 45, 10, '#96b6ce');
        for (const p of players) { const x = (teamMode() || training) ? 50 + p.i * 290 : (p.i === 0 ? 85 : 875), width = teamMode() ? 220 : 240; round(x, 602, width, 38, 7, '#0a192ada'); text(p.controller < 0 ? 'CPU' : 'P'+(p.controller+1), x + 24, 625, 11, p.side === 0 ? '#d9ff66' : '#8bcfff'); round(x + 50, 615, 90, 7, 3, '#263f50'); round(x + 50, 615, Math.max(1, 90 * p.power), 7, 3, '#d9ff66'); text(powerStatus(p), x + 178, 625, 9); }

        text('PS5 · × PAS  /  □ ŞUT  /  ○ SÜPER  /  R1 YEDEK', 600, 651, 10, '#b0c6ce');
        c.restore();
    }
    function drawHero() {
        rect(0, 0, W, H, '#08162d42');
        const glow = c.createRadialGradient(870, 325, 10, 870, 325, 360); glow.addColorStop(0, '#64a4ba30'); glow.addColorStop(1, '#64a4ba00'); rect(400, 0, 800, 660, glow);
        c.save(); c.globalAlpha = .12; c.strokeStyle = '#b7eaff'; c.lineWidth = 1;
        for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(885, 330, 150 + i * 45, 0, Math.PI * 2); c.stroke(); } c.restore();
        for (const [index, x, y, scale] of [[1, 1005, 473, 2.15], [0, 790, 495, 2.55]]) {
            const p = { ...makePlayer(index), x: 0, y: 0, team: teams[index], star: teams[index].players[0], dir: index === 0 ? 1 : -1, walk: 0, kick: 0, immune: 0 };
            const heroX=x*W/1200;ellipse(heroX, y + 9, 82, 15, '#000a'); c.save(); c.translate(heroX, y + (reducedMotion ? 0 : Math.sin(clock * 1.5 + index) * 3)); c.scale(scale, scale); drawPlayer(p, true); c.restore();
        }
        c.save(); c.translate(917*W/1200, 495); c.scale(1.6, 1.6); const old = ball; ball = { x: 0, y: 0, spin: clock * .25, fire: 0 }; const oldTrail = trail; trail = []; drawBall(); ball = old; trail = oldTrail; c.restore();
    }
    function drawCeremony() {
        rect(0, 0, W, H, '#040d3a99');
        const team = teams[tournament.selected], middle = W / 2;
        text('UCL ŞAMPİYONU', middle, 80, 42, '#ffdf6b'); text(team.name, middle, 124, 24);
        round(middle - 400, 485, 800, 65, 12, '#142da2', '#89adff');
        text('UCL · ŞAMPİYONLAR', middle, 527, 24, '#e4ecff');
        const roster = [...team.players, team.keeper];
        for (let i = 0; i < roster.length; i++) {
            const p = { ...makePlayer(0), star: roster[i], team: i === team.players.length ? { ...team, kit: team.keeperKit } : team, isKeeper: i === team.players.length, x: middle - 280 + i * 140, y: 482 - Math.abs(Math.sin(ceremonyTime * 3 + i)) * 9, dir: i < 2 ? 1 : -1, walk: 0, kick: 0, stun: 0, immune: 0 };
            p.celebrating = true; drawPlayer(p, true);
        }
        // The trophy rests beside the celebrating squad throughout the ceremony.
        const trophyX = middle + 270, trophyY = 325;
        ellipse(trophyX + 50, 483, 58, 7, '#0008');
        if (trophyImage.complete && trophyImage.naturalWidth) c.drawImage(trophyImage, trophyX - 30, trophyY, 160, 160);
        for (let i = 0; i < 90; i++) { const x = (i * 167.3) % W, y = (i * 47 + ceremonyTime * (45 + i % 30)) % 620; rect(x, y, 4, 8, ['#fbe079', '#5aebee', '#e54d9e'][i % 3]); }
    }
    function draw() {
        prepareView();
        stadium();
        if (drawnSuper?.phase === 'drawing') { drawSuperSpotlight(); return; }
        if (penalty && !penalty.shot) {
            const g = penaltyGoalRect(), x = g.x + g.w / 2, y = g.y + penalty.aim.y * g.h;
            circle(x, y, 12, '#d9ff6680'); line(x - 20, y, x + 20, y, '#d9ff66', 3);
            line(x, y - 20, x, y + 20, '#d9ff66', 3);
            if (penalty.keeperController >= 0) {
                const keeper = keepers.find(k => k.side !== penalty.side), guessY = g.y + g.h * penalty.keeperGuess;
                if (keeper) { circle(keeper.x, guessY, 14, '#8bcfff80'); line(keeper.x - 22, guessY, keeper.x + 22, guessY, '#8bcfff', 3); }
            }
        }
        if (state === 'ceremony') { drawCeremony(); return; }
        if (training && state === 'playing') { for (const y of [GOAL_TOP + 36, FLOOR - 30]) { c.beginPath(); c.arc(W - 55, y, 20, 0, Math.PI * 2); c.strokeStyle = '#d9ff66'; c.lineWidth = 3; c.stroke(); } text('ANTRENMAN · SINIRSIZ SÜRE', 600, 140, 15, '#d9ff66'); }
        if (retreat) { round(W / 2 - 235, 123, 470, 38, 7, '#132033ee'); text('RAKİPLER KENDİ YARISINA!  ' + Math.ceil(retreat.remaining) + ' SN', W / 2, 148, 17, '#ffda80'); }
        if (state === 'menu' || state === 'setup' || state === 'help' && ['menu', 'setup'].includes(helpReturn)) { drawHero(); return; }
        drawSidelines();
        if (goalKick && goalKick.phase === 'aim') {
            text(goalKick.human ? 'KALE VURUŞU · PAS VERECEĞİN OYUNCUYA TIKLA' : 'RAKİP KALE VURUŞU', W / 2, 156, 18, '#fff2b5');
            if (goalKick.human) for (const p of players.filter(p => p.side === goalKick.side)) {
                const risk = goalKickRisk(p), color = risk > .01 ? '#ffb286' : '#91f3d6';
                ellipse(p.x, FLOOR + 6, 47, 10, color); round(p.x - 95, p.y - 218, 190, 24, 5, '#101e37ee');
                text((risk > .01 ? 'MARKAJDA' : 'BOŞTA') + ' · %' + Math.round(risk * 100) + ' TOP KAYBI', p.x, p.y - 201, 11, color);
            }
        }
        c.save(); if (shake && !reducedMotion) c.translate((Math.random() - .5) * shake, (Math.random() - .5) * shake);
        if (!training) net(0, 1, players[0].team.color); net(W, -1, training ? players[0].team.color : players[1].team.color);
        const waiting = p => !(shootout && penalty && p.side === penalty.side && p.star === penalty.taker.star);
        keepers.filter(waiting).forEach(p => drawPlayer(p)); players.filter(waiting).forEach(p => drawPlayer(p));
        if (shootout && penalty) drawPlayer(penalty.taker); drawBall();
        if(screenFit&&(ball.x<cameraX||ball.x>cameraX+cameraWidth)){const dir=ball.x<cameraX?-1:1,x=dir<0?cameraX+34:cameraX+cameraWidth-34,y=H*.55;c.save();circle(x,y,12,'#fff');circle(x,y,4,'#18342a');c.fillStyle='#d9ff66';c.beginPath();c.moveTo(x+dir*25,y);c.lineTo(x+dir*15,y-8);c.lineTo(x+dir*15,y+8);c.closePath();c.fill();c.restore();}
        for (const p of particles) { c.globalAlpha = clamp(p.life, 0, 1); rect(p.x, p.y, p.size, p.size, p.color); } c.globalAlpha = 1;
        for (const p of labels) { c.globalAlpha = clamp(p.life * 2, 0, 1); text(p.text, p.x, p.y, 17, p.color); } c.globalAlpha = 1; c.restore();scoreboard();
        if (penalty && !penalty.shot) text(penalty.taker.controller < 0 ? 'RAKİP PENALTI ATIYOR' : 'PENALTI · SAĞ ANALOG HEDEF · □ İLE VUR', W / 2, shootout ? 206 : 151, 18, '#ffda80');
        if (penalty && !penalty.shot && penalty.keeperController >= 0) text('KALECİ · SAĞ ANALOG İLE ATLAMA YÜKSEKLİĞİNİ SEÇ', W / 2, shootout ? 232 : 177, 14, '#8bcfff');
        if (announceTime > 0) { c.save(); c.translate(W / 2, 248); if (!reducedMotion) c.scale(1 + Math.sin(announceTime * 8) * .025, 1 + Math.sin(announceTime * 8) * .025); c.shadowColor = '#000'; c.shadowBlur = 20; text(announcement, 0, 0, announcement === 'GOOOL!' ? 78 : 35, '#d9ff66'); c.shadowBlur = 0; if (announcement === 'GOOOL!') text(`${(celebration?.name || (players.find(p=>p.i===ball.shooter) || players[0]).star.name)} · AĞLARI SARSTI`, 0, 35, 13); c.restore(); }
    }
    let lastDraw = -Infinity;
    function frame(t) {
        // Keep the renderer alive if a single update or asset draw throws.
        requestAnimationFrame(frame);
        if(document.hidden||senSession?.remote||window.ArenaSpectator?.active){last=t;return;}
        pollGamepad();
        window.ArenaCrowd?.tick();
        const elapsed = Math.min((t - last) / 1000, .05); last = t;
        if (state === 'ceremony') { ceremonyTime += elapsed; clock += elapsed; }
        if (state === 'result' && celebration && !reducedMotion) clock += elapsed;
        if (state === 'playing' && !window.ArenaOnline?.active && !senSession?.remote) { accumulator += elapsed; while (accumulator >= 1 / 120) { update(1 / 120); accumulator -= 1 / 120; } } else { accumulator = 0; if (!reducedMotion && ['menu', 'setup'].includes(state)) clock += elapsed; }
        // High-refresh displays need no extra canvas redraws between 60 Hz frames.
        const drawInterval = state === 'playing' ? 1000 / 60 : state === 'ceremony' || state === 'result' ? 1000 / 30 : 1000;
        if (menuPaintPending || t - lastDraw >= drawInterval - .5) { draw(); lastDraw = t; menuPaintPending=false; }
    }

    function changeCategory() { const pool = availableTeams(); selection.forEach((c, i) => { if (!pool.includes(c.team)) selection[i] = { team: pool[i], player: 0, partner: 1 }; }); renderSelection(); alignCarousel(0); alignCarousel(1); }
    function launch() {
        if(partyMatch&&!window.ArenaOnline?.active&&['result','draw-choice'].includes(state)&&window.ArenaLocalPlay?.rematch){window.ArenaLocalPlay.rematch();return;}
        if(state==='setup'){partyMatch=null;partyLocal=[];partyInputs.clear();}
        if (window.ArenaOnline?.active) { if(state==='result'){window.ArenaOnline.requestRematch();return;}if(window.ArenaOnline.role==='host')window.ArenaOnline.begin(); return; }
        normalizeTeams();
        applyDeviceRules();
        training = competition === 'training';
        if (competition === 'ucl') {
            if (mode === 'local') mode = 'coop';
            tournament = new window.ArenaUCL(teams, selection[0].team); suddenDeath = false; showBracket(); return;
        }
        tournament = null; suddenDeath = false; start(); if (training) resetTraining();
    }
    function resetTraining() {
        if (!training) return;
        ball.owner = -1; ball.keeper = -1; ball.controlLock = 0; retreat = null; penalty = null; goalKick = null; trail = [];
        const p = players[0], drill = $('#training-drill').value;
        p.x = drill === 'bicycle' ? W - 420 : W * .42; p.y = FLOOR; p.vx = 0; p.vy = 0; p.kick = 0; p.cooldown = 0; p.dir = 1;
        if (players[1]) Object.assign(players[1], { x: p.x - 260, y: FLOOR, vx: 0, vy: 0, kick: 0, slide: 0, stun: 0, dir: 1 });
        ball.x = p.x + 45; ball.y = drill === 'ground' ? FLOOR - 30 : 310; ball.vx = 0; ball.vy = 0; ball.fire = 0; ball.effectLife = 0; ball.passenger = -1; goalWait = 0;
        if (drill === 'penalty') awardPenalty(0);
        renderRestartTools();
    }
    $('#play-menu').onclick = () => { setupStep=0;setupFocus=0;applyDeviceRules();screen('setup');renderSelection();alignCarousel(0);alignCarousel(1); };
    for (const id of ['brand', 'nav-home', 'back', 'home', 'quit']) $('#' + id).onclick = home;
    for (const id of ['nav-how', 'how-menu']) $('#' + id).onclick = openHelp;
    $('#close-help').onclick = () => screen(helpReturn === 'playing' ? 'paused' : helpReturn);
    $$('[data-mode]').forEach(b => b.onclick = () => { mode = b.dataset.mode; setupStep = 0; renderSelection(); $$('[data-mode]').forEach(x => { x.classList.toggle('selected', x === b); x.setAttribute('aria-pressed', String(x === b)); }); });
    $('#setup-next').onclick = () => advanceSetup();
    $('#setup-prev').onclick = () => advanceSetup(-1);
    $('#start').onclick = () => { if (state === 'setup' && setupSteps()[setupStep].kind !== 'ready') return; launch(); };
    $('#again').onclick = () => launch();
    $('#end-draw').onclick = () => { if (state === 'draw-choice' && !tournament) finish(true); };
    $('#extra-time').onclick = startExtraTime;
    $('#start-shootout').onclick = () => { if (state === 'draw-choice') startShootout(); };
    $('#ucl-next').onclick = nextCupMatch; $('#ucl-home').onclick = home; $('#ceremony-home').onclick = home;
    $('#competition').onchange = () => { competition = $('#competition').value; setupStep = 0; changeCategory(); };
    canvas.addEventListener('pointerdown', e => {
        if(window.ArenaSpectator?.active)return;
        if (state !== 'playing') return;
        if(window.ArenaOnline?.role==='guest'){const side=goalKick?.side??penalty?.side;if(partyMatch&&!ownsSide(side))return;const box=canvas.getBoundingClientRect();window.ArenaOnline.send({type:'point',side,x:screenPoint(e).x,y:screenPoint(e).y});return;}
        if (drawnSuper) { superPointerDown(e); return; }
        const box = canvas.getBoundingClientRect();
        const x = screenPoint(e).x, y = screenPoint(e).y;
        if(partyMatch&&!ownsSide(goalKick?.side??penalty?.side))return;
        if(!partyMatch&&window.ArenaOnline?.role==='host' && (goalKick?.side===1||penalty?.side===1))return;
        if (goalKick && goalKick.phase === 'aim' && goalKick.human) {
            const target = players.filter(p => p.side === goalKick.side && Math.abs(x - p.x) < 80 && y > p.y - 190 && y < p.y + 30).sort((a, b) => Math.abs(a.x - x) - Math.abs(b.x - x))[0];
            if (target) { e.preventDefault(); takeGoalKick(target); } return;
        }
        if (!penalty || penalty.taker.controller < 0) return;
        const g = penaltyGoalRect();
        if (x < g.x - 35 || x > g.x + g.w + 35 || y < g.y - 35 || y > g.y + g.h + 35) return;
        e.preventDefault(); shootPenalty((x - g.x) / g.w, (y - g.y) / g.h);
    });
    $('#training-size').onchange = () => {
        $('#training-partner').disabled = $('#training-size').value === 'solo';
        if (!training || !['playing', 'paused'].includes(state)) return;
        selection[0].player = teams[selection[0].team].players.indexOf(players[0].star);
        if (players[1]) selection[0].partner = teams[selection[0].team].players.indexOf(players[1].star);
        resetPositions(); resetTraining(); keys = {}; pressed.clear(); renderBench();
    };
    $('#training-reset').onclick = resetTraining;
    $('#training-partner').onchange = () => {
        trainingPartner = $('#training-partner').value === 'human' ? 'human' : 'cpu';
        if (training && players[1]) { players[1].controller = trainingPartner === 'human' ? 1 : -1; players[1].kick = 0; players[1].slide = 0; renderBench(); }
    };
    $('#training-drill').onchange = resetTraining; $('#pause').onclick = pause; $('#resume').onclick = pause;
    $('#sound').onclick = () => window.ArenaAudio?.open();
    $('#fullscreen').onclick = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('#arena').requestFullscreen(); } catch { $('#fullscreen').title = 'Bu tarayıcı tam ekranı desteklemiyor'; } };
    $('#fullscreen-panels').onclick = () => { const open = $('#arena').classList.toggle('fullscreen-panels-open'); $('#fullscreen-panels').setAttribute('aria-expanded', String(open)); };
    for (let side = 0; side < 2; side++) $('#sub-' + side).onclick = () => requestSub(benchPlayer(side));
    const keyCodes = ['KeyF', 'KeyJ', 'KeyR', 'KeyO', 'KeyA', 'KeyD', 'KeyW', 'KeyS', 'KeyV', 'KeyB', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyK', 'KeyL'];

    let adminActive = false, adminKind = 'login', adminDigits = '', adminMatchBefore = null, adminMatchVersion = 0, matchVersion = 0;
    const adminPowers = new Map();
    const adminValue = (p, key) => adminActive && !p.isTrainingKeeper ? adminPowers.get(teams.findIndex(t => t.name === p.team.name))?.[key] : undefined;
    const adminFactor = (p, key) => { const value = adminValue(p, key); return value === undefined ? 1 : value / 5; };
    function openAdmin(kind) {
        adminKind = kind; keys = {}; pressed.clear();
        const fields = $('#admin-fields'); $('#admin-message').textContent = '';
        $('#admin-title').textContent = kind === 'powers' ? teams[selection[0].team].name + ' / Takım güçleri' : kind === 'match' ? 'Skor ve süre' : 'Admin paneli';
        const input = (id, title, value, max) => '<label>' + title + '<input id="admin-' + id + '" type="number" min="0" max="' + max + '" step="1" required value="' + value + '"></label>';
        if (kind === 'login') fields.innerHTML = adminActive ? '<p>Admin aktif. Takım seçiminde 1107, maçta 1109 yaz.</p>' : '<label>Admin kodu<input id="admin-password" type="password" autocomplete="off" required></label>';
        if (kind === 'powers') {
            const values = adminPowers.get(selection[0].team) || {};
            fields.innerHTML = input('shot', 'Şut / süper şut (0–10)', values.shot ?? 5, 10) + input('jump', 'Zıplama (0–10)', values.jump ?? 5, 10) + input('speed', 'Hız (0–10)', values.speed ?? 5, 10) + input('save', 'Kaleci kurtarışı (her birim %10)', values.save ?? (teams[selection[0].team].category === 'special' ? 5 : 2), 10);
            fields.innerHTML += input('accuracy', '\u015eut isabeti (0\u201310)', values.accuracy ?? 5, 10);
            const doubleJump = values.doubleJump ?? teams[selection[0].team].category === 'special';
            fields.innerHTML += '<label>Double jump<select id="admin-doubleJump"><option value="yes" ' + (doubleJump ? 'selected' : '') + '>Olsun</option><option value="no" ' + (!doubleJump ? 'selected' : '') + '>Olmas\u0131n</option></select></label>';
        }
        if (kind === 'match') fields.innerHTML = input('home', 'Bizim skor', score[0], 999) + input('away', 'Rakip skor', score[1], 999) + input('time', 'Kalan süre (saniye)', Math.ceil(time), 36000);
        $('#admin-dialog').showModal();
    }
    function disableAdmin() {
        drawnSuper = null; canvas.style && (canvas.style.cursor = '');
        adminActive = false; adminPowers.clear(); adminDigits = '';
        if (adminMatchBefore && adminMatchVersion === matchVersion) { score = [...adminMatchBefore.score]; time = adminMatchBefore.time; }
        adminMatchBefore = null; $('#admin-disable').classList.add('hidden'); $('#admin-dialog').close(); renderSelection();
    }
    function adminCode(code) {
        if (!adminActive || !['setup', 'playing', 'paused'].includes(state)) return;
        const digit = /^(?:Digit|Numpad)([0-9])$/.exec(code);
        if (!digit) { adminDigits = ''; return; }
        adminDigits = (adminDigits + digit[1]).slice(-4);
        if (adminDigits === '1107' && state === 'setup') { adminDigits = ''; openAdmin('powers'); }
        if (adminDigits === '1109' && ['playing', 'paused'].includes(state)) { adminDigits = ''; openAdmin('match'); }
    }
    $('#admin-open').onclick = () => openAdmin('login');
    $('#admin-disable').onclick = disableAdmin;
    $('#admin-close').onclick = () => $('#admin-dialog').close();
    $('#admin-form').onsubmit = e => {
        e.preventDefault();
        if (adminKind === 'login') {
            if (!adminActive && $('#admin-password').value !== 'OreO') { $('#admin-message').textContent = 'Kod yanlış.'; return; }
            adminActive = true; $('#admin-disable').classList.remove('hidden'); $('#admin-message').textContent = 'Admin aktif. Takım seçiminde 1107, maçta 1109 yaz.'; return;
        }
        if (!adminActive) return;
        const read = (key, max) => { const v = Number($('#admin-' + key).value); if (!Number.isInteger(v) || v < 0 || v > max) throw Error('Geçerli bir değer gir.'); return v; };
        try {
            if (adminKind === 'powers') adminPowers.set(selection[0].team, { shot: read('shot', 10), jump: read('jump', 10), speed: read('speed', 10), save: read('save', 10), accuracy: read('accuracy', 10), doubleJump: $('#admin-doubleJump').value === 'yes' });
            if (adminKind === 'match') {
                const nextScore = [read('home', 999), read('away', 999)], nextTime = read('time', 36000);
                if (!adminMatchBefore || adminMatchVersion !== matchVersion) { adminMatchBefore = { score: [...score], time }; adminMatchVersion = matchVersion; }
                score = nextScore; time = nextTime;
            }
            $('#admin-dialog').close();
        } catch (error) { $('#admin-message').textContent = error.message; }
    };


    function canUseDrawnSuper(p) {
        if (!p || !hasSpecialPowers(p) || window.ArenaOnline?.active || p.team.draftTeam) return false;
        if (training) return trainingDrawnSuper;
        return competition === 'friendly';
    }
    function beginDrawnSuper(p) {
        if (!canUseDrawnSuper(p)) return;
        drawnSuper = { phase: 'drawing', shooter: p.i, side: p.side, points: [{ x: ball.x, y: ball.y }], pointer: null, index: 1 };
        ball.aimPath = null; ball.vx = 0; ball.vy = 0;
        keys = {}; pressed.clear(); trail = [];
        if (canvas.style) canvas.style.cursor = 'crosshair';
    }
    function addSuperPoint(x, y) {
        if (!drawnSuper || drawnSuper.phase !== 'drawing') return;
        const point = { x: clamp(x, ball.r, W - ball.r), y: clamp(y, ball.r, H - ball.r) };
        const lastPoint = drawnSuper.points[drawnSuper.points.length - 1];
        if (Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y) >= 3 && drawnSuper.points.length < 4000) drawnSuper.points.push(point);
    }
    function releaseDrawnSuper() {
        if (!drawnSuper || drawnSuper.phase !== 'drawing') return;
        if (!canUseDrawnSuper(players[drawnSuper.shooter])) { drawnSuper = null; if(canvas.style)canvas.style.cursor = ''; return; }
        if (drawnSuper.points.length < 2) { drawnSuper.pointer = null; return; }
        const x = drawnSuper.side === 0 ? W - GOAL_LINE + POST_RADIUS + ball.r + 2 : GOAL_LINE - POST_RADIUS - ball.r - 2;
        // Finish any drawn route inside the opposing net, without keeper or body collisions.
        drawnSuper.points.push({ x: drawnSuper.side === 0 ? W - 100 : 100, y: GOAL_TOP + 80 }, { x, y: GOAL_TOP + 80 });
        drawnSuper.phase = 'flight'; drawnSuper.pointer = null;
        ball.owner = -1; ball.keeper = -1; ball.passenger = -1; ball.fire = 10;
        keys = {}; pressed.clear(); if (canvas.style) canvas.style.cursor = '';
    }
    function updateDrawnSuper(dt) {
        const shot = drawnSuper; let travel = 1600 * dt;
        clock += dt; if (!training && !suddenDeath) time = Math.max(0, time - dt);
        while (shot.index < shot.points.length && travel > 0) {
            const target = shot.points[shot.index], dx = target.x - ball.x, dy = target.y - ball.y, distance = Math.hypot(dx, dy);
            if (distance <= travel) { ball.x = target.x; ball.y = target.y; travel -= distance; shot.index++; }
            else { ball.x += dx / distance * travel; ball.y += dy / distance * travel; travel = 0; }
        }
        ball.spin += dt * 24; ball.effectLife = 1; trail.push({ x: ball.x, y: ball.y, fire: 1, effect: 'super' }); if (trail.length > 20) trail.shift();
        if (shot.index === shot.points.length) { drawnSuper = null; ball.vx = 0; ball.vy = 0; ball.aimPath = null; goal(shot.side); }
    }
    function drawSuperSpotlight() {
        rect(0, 0, W, H, '#000');
        c.save(); c.shadowColor = '#d9ff66'; c.shadowBlur = 25; drawPlayer(players[drawnSuper.shooter]); drawBall(); c.restore();
        const points = drawnSuper.points; c.beginPath(); c.moveTo(points[0].x, points[0].y); for (const point of points.slice(1)) c.lineTo(point.x, point.y);
        c.strokeStyle = '#d9ff66'; c.lineWidth = 4; c.stroke();
        text('S\u00dcPER \u015eUTUN YOLUNU \u00c7\u0130Z', W / 2, 65, 28, '#d9ff66');
        text('SAĞ ANALOG İLE YOLU ÇİZ · × İLE TOPU GÖNDER', W / 2, 97, 16, '#fff');
    }
    function superPointerPoint(e) {
        const box = canvas.getBoundingClientRect(); addSuperPoint(screenPoint(e).x, screenPoint(e).y);
    }
    function superPointerDown(e) {
        if (state !== 'playing' || drawnSuper?.phase !== 'drawing' || (e.pointerType === 'mouse' && e.button !== 0) || drawnSuper.pointer !== null) return;
        e.preventDefault(); drawnSuper.pointer = e.pointerId; canvas.setPointerCapture(e.pointerId); superPointerPoint(e);
    }
    canvas.addEventListener('pointermove', e => {
        if (drawnSuper?.phase !== 'drawing' || drawnSuper.pointer !== e.pointerId) return; e.preventDefault(); superPointerPoint(e);
    });
    canvas.addEventListener('pointerup', e => {
        if (drawnSuper?.phase !== 'drawing' || drawnSuper.pointer !== e.pointerId) return; e.preventDefault(); superPointerPoint(e); releaseDrawnSuper();
        if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    });
    for (const type of ['pointercancel', 'lostpointercapture']) canvas.addEventListener(type, e => {
        if (drawnSuper?.phase === 'drawing' && drawnSuper.pointer === e.pointerId) { drawnSuper.pointer = null; drawnSuper.points = [{ x: ball.x, y: ball.y }]; }
    });

    function keyDown(code) { if(window.ArenaSpectator?.active)return; if (window.ArenaOnline?.active && !window.ArenaOnline?.party && ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyL','KeyJ','KeyO'].includes(code)) return; if (!keys[code]) pressed.add(code); keys[code] = true; }
    window.addEventListener('keydown', e => { if ($('#admin-dialog').open || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target?.tagName)) return; if (!e.repeat) adminCode(e.code); if ($('#admin-dialog').open) { e.preventDefault(); return; } if (state === 'playing' && keyCodes.includes(e.code)) { e.preventDefault(); keyDown(e.code); } if (e.code === 'Escape' && !e.repeat) { if (state === 'help') $('#close-help').click(); else if (state === 'setup') home(); else pause(); } });
    window.addEventListener('keyup', e => { keys[e.code] = false; });
    window.addEventListener('blur', () => { keys = {}; pressed.clear(); if (state === 'playing' && !window.ArenaOnline?.active) pause(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && state === 'playing' && !window.ArenaOnline?.active) pause(); });
    window.addEventListener('resize', resizeCanvas);
    document.fonts?.ready.then(() => { stadiumCache = null; });
﻿    window.ArenaOnlineGame = {
        networkPause(value){keys={};pressed.clear();partyInputs.clear();this.accumulator=0;if(value&&state==='playing')screen('paused');else if(!value&&state==='paused')screen('playing');},
        advance(elapsed) {
            if(state!=='playing'){this.accumulator=0;return;}
            this.accumulator=(this.accumulator||0)+Math.min(Math.max(elapsed,0),.25);
            while(this.accumulator>=1/120){update(1/120);this.accumulator-=1/120;}
        },
        configure() { partyMatch=null;partyLocal=[];partyInputs.clear();competition='friendly';training=false;tournament=null;mode='local';setupStep=0;screen('setup');renderSelection(); },
        begin(config) {
            this.accumulator=0;partyMatch=config?.party||null;partyInputs.clear();partyLocal=partyMatch?partyMatch.seats.filter(s=>s.peer===(config.localPeer||'local')&&!s.cpu).sort((a,b)=>a.local-b.local).map(s=>s.controller):[];
            if(config?.draft){config={...config,selection:window.ArenaDraft.install(config.draft,config.draftIdentities)};}
            if(config){config.selection.forEach((v,i)=>selection[i]={...v});$('#match-light').value=config.light;}
            competition='friendly';training=false;tournament=null;mode='local';start();
            $('#match-label').textContent=partyMatch?'ARKADAŞ MAÇI · '+[0,1].map(side=>partyMatch.seats.filter(s=>s.side===side).length).join('v'):config?.ultimate?'ULTIMATE TEAM · KULÜP MAÇI':'ONLINE · 1V1';
            return {selection:selection.map(v=>({...v})),light:matchLight,...(config?.draft?{draft:config.draft,draftIdentities:config.draftIdentities}:{}),...(config?.ultimate?{ultimate:config.ultimate}:{})};
        },
        input(packet) {
            if(partyMatch){for(const value of packet.controls||[]){const old=partyInputs.get(value.controller);partyInputs.set(value.controller,{held:new Set(value.held||[]),pressed:new Set([...(old?.pressed||[]),...(value.pressed||[])]),time:Date.now()});}return;}
            const map={KeyA:'ArrowLeft',KeyD:'ArrowRight',KeyW:'ArrowUp',KeyS:'ArrowDown',KeyV:'KeyK',KeyB:'KeyL',KeyF:'KeyJ',KeyR:'KeyO'};
            for(const code of Object.values(map))keys[code]=false;
            for(const code of packet.held||[])if(map[code])keys[map[code]]=true;
            for(const code of packet.pressed||[])if(map[code])pressed.add(map[code]);
            if(packet.pressed?.includes('KeyF')&&goalKick?.side===1&&goalKick.phase==='aim'){const p=players.find(v=>v.side===1);if(p)takeGoalKick(p);}
        },
        localInput() {
            if(partyMatch){const controls=partyLocal.map((controller,local)=>{const c=partyCodes[local],held=['left','right','up','down'].filter((_,i)=>keys[c[i]]),edge=['jump','slide','kick','super','pass','sub'].filter((_,i)=>pressed.has(c[i+2]));return {local,held,pressed:edge};});pressed.clear();return {type:'input',controls};}
            const held=Object.keys(keys).filter(k=>keys[k]);
            const edge=[...pressed];pressed.clear();return {type:'input',held,pressed:edge};
        },
        command(p) {
            if(p.type==='pause')pause();
            if(p.type==='point') {
                if(goalKick&&(p.sides?p.sides.includes(goalKick.side):goalKick.side===1)&&goalKick.phase==='aim'){const target=players.find(v=>v.side===1&&Math.abs(v.x-p.x)<80);if(target)takeGoalKick(target);}
                if(penalty&&(p.sides?p.sides.includes(penalty.side):penalty.side===1)){const g=penaltyGoalRect();shootPenalty((p.x-g.x)/g.w,(p.y-g.y)/g.h);}
            }
        },
        snapshot() {
            const actor=p=>{const out={};for(const [k,v]of Object.entries(p))if(k!=='team'&&k!=='star'&&(v===null||['number','string','boolean'].includes(typeof v)))out[k]=v;out.starIndex=teams[selection[p.side].team].players.indexOf(p.star);return out;};
            return {type:'snapshot',state,stats:matchReport(),players:players.map(actor),keepers:keepers.map(actor),ball,score,time,clock,goalWait,goalWinner,announcement,announceTime,matchPhase,shots,corners,trail,particles,labels,matchEvents,celebration,benches:benches.map((b,side)=>b.map(p=>teams[selection[side].team].players.indexOf(p))),goalKick:goalKick?{side:goalKick.side,phase:goalKick.phase,human:goalKick.human}:null,penalty:penalty?{...penalty,taker:actor(penalty.taker)}:null,shootout,resultTitle:$('#result-title').textContent,resultScore:$('#result-score').textContent,drawScore:$('#draw-score').textContent};
        },
        receive(v) {
            if(!Array.isArray(v.players)||!v.ball)return;
            if(!senSession&&!window.ARENA_HEADLESS&&!window.ArenaSpectator?.active&&Array.isArray(v.score))for(let side=0;side<2;side++)if(v.score[side]===score[side]+1&&v.clock>=clock&&v.clock-clock<3){const actor=v.players.find(p=>p.i===v.ball.shooter),scorer=actor?teams[selection[actor.side].team].players[actor.starIndex]?.name:'';emitHighlight(side,v.score,scorer||v.celebration?.name||'');}
            const apply=(p,i,keeper)=>{const team=teams[selection[p.side].team],trainingKeeper=keeper&&training&&senSession&&keepers[i];return {...(keeper?keepers[i]:players[i]),...p,team:trainingKeeper?trainingKeeper.team:keeper?{...team,kit:team.keeperKit}:team,star:trainingKeeper?trainingKeeper.star:keeper?team.keeper:team.players[p.starIndex]};};
            if(v.stats&&!window.ArenaSpectator?.active){this.remoteReport=v.stats;if(v.state==='result'&&this.reportClock!==v.clock){this.reportClock=v.clock;window.dispatchEvent(new CustomEvent('golbol-native-report',{detail:v.stats}));}}players=v.players.map((p,i)=>apply(p,i,false));keepers=v.keepers.map((p,i)=>apply(p,i,true));ball=v.ball;score=v.score;time=v.time;clock=v.clock;goalWait=v.goalWait;goalWinner=v.goalWinner;announcement=v.announcement;announceTime=v.announceTime;matchPhase=v.matchPhase;shots=v.shots;corners=v.corners;trail=v.trail;particles=v.particles;labels=v.labels;matchEvents=v.matchEvents;shootout=v.shootout;celebration=v.celebration;goalKick=v.goalKick;benches=v.benches.map((b,side)=>b.map(i=>teams[selection[side].team].players[i]));syncBench();
            penalty=v.penalty?{...v.penalty,taker:apply(v.penalty.taker,0,!!v.penalty.taker.isKeeper)}:null;
            if(state!==v.state)screen(v.state);
            const signature=JSON.stringify([v.players.map(p=>[p.starIndex,Math.floor(p.health/5)]),v.benches,v.goalKick,v.matchEvents.length]);if(signature!==this.lastSignature){this.lastSignature=signature;renderBench();renderMatchEvents();renderRestartTools();}
            $('#result-title').textContent=v.resultTitle;$('#result-score').textContent=v.resultScore;$('#draw-score').textContent=v.drawScore;
        },stop(){partyMatch=null;partyLocal=[];partyInputs.clear();screen('menu');keys={};pressed.clear();},pause
    };

    window.ArenaControls={
        get state(){return state;},get drawn(){return drawnSuper?.phase==='drawing';},get penalty(){return !!penalty&&!penalty.shot;},get secondController(){if(partyMatch)return partyLocal.length>1;return !window.ArenaOnline?.active&&(mode==='local'||mode==='coop'||trainingPartner==='human'&&training);},
        view(){return {x:cameraX,width:cameraWidth,worldWidth:W,height:H,fullscreen:screenFit,offsetX:viewOffsetX,offsetY:viewOffsetY,scale:renderScale};},report(){return window.ArenaOnline?.role==='guest'?window.ArenaOnlineGame.remoteReport:matchReport();},get device(){return device;},setDevice(value){if(!['ps5','pc','mobile'].includes(value))return;device=value;mode='ai';applyDeviceRules();},keyDown,keyUp(code){keys[code]=false;},pause,paint:draw,
        back(){if(state==='setup'){if(setupStep>0)advanceSetup(-1);else home();}else if(state==='help')$('#close-help').click();else if(state==='paused')pause();else if(state!=='playing')home();},
        aim(x,y){
            if(!partyMatch&&goalKick?.human&&goalKick.phase==='aim'&&pressed.has('KeyF')&&(!window.ArenaOnline?.active||window.ArenaOnline.role==='host'&&goalKick.side===0)){takeGoalKick(players.find(p=>p.side===goalKick.side&&p.controller<0)||players.find(p=>p.side===goalKick.side));pressed.delete('KeyF');}
        },
        drawPath(x,y,finish){if(!drawnSuper)return;const point=drawnSuper.points.at(-1);if(Math.hypot(x,y)>.2){const next={x:clamp(point.x+x*14,ball.r,W-ball.r),y:clamp(point.y+y*14,ball.r,H-ball.r)};if(drawnSuper.points.length<4000)drawnSuper.points.push(next);}if(finish)releaseDrawnSuper();},
        settings(kind){if(adminActive)openAdmin(kind);else openAdmin('login');}
    };
    window.ArenaOfflineGame={begin(draft,identities,party){partyMatch=party||null;partyLocal=partyMatch?partyMatch.seats.filter(s=>s.peer==='local'&&!s.cpu).sort((a,b)=>a.local-b.local).map(s=>s.controller):[];partyInputs.clear();window.ArenaDraft.install(draft,identities).forEach((v,i)=>selection[i]=v);competition='friendly';training=false;tournament=null;mode='ai';suddenDeath=false;start();$('#match-label').textContent='OFFLINE DRAFT · SEN / CPU';}};
    window.ArenaSenEngine={
        begin(config){
            if(!senSession) this.previous={selection:selection.map(v=>({...v})),competition,training,mode,size:$('#training-size').value,drill:$('#training-drill').value};
            senSession={remote:config.remote!==false,profiles:config.profiles,rules:config.rules||null,cpuSides:config.cpuSides||[],team:config.profiles.length===4,penalties:!!config.penalties,rosterActors:!!config.rosterActors,localSeat:config.localSeat||0,sequence:0};partyMatch=null;partyLocal=[];partyInputs.clear();tournament=null;suddenDeath=false;
            const base=teams.find(t=>!t.senTeam&&t.category!=='special');
            for(let side=0;side<2;side++){
                const p=config.profiles[side]||config.profiles[0],a=p.character;
                const original=senSession.rosterActors?teams.filter(t=>!t.senTeam).flatMap(t=>t.players.map(star=>({team:t,star}))).find(v=>(side===0?/mbapp|mbape/i:/haaland|holant/i).test(v.star.realName||v.star.name)):null;
                const source=original?.team||base,star=original?{...original.star,name:side===0?'Kylian Mbapp\u00e9':'Erling Haaland',realName:side===0?'Kylian Mbapp\u00e9':'Erling Haaland'}:window.ArenaSenPlayer.star(p,base.players[0],window.ArenaSenHeadSkin?.[a.face]);
                let index=teams.findIndex(t=>t.senTeam===side+1);if(index<0)index=teams.length;
                teams[index]={...source,name:original?source.name:a.nickname,short:original?source.short:'SEN'+side,category:'sen',senTeam:side+1,draftTeam:true,crestImage:null,players:senSession.team?[star,window.ArenaSenPlayer.star(config.profiles[side+2],base.players[0],window.ArenaSenHeadSkin?.[config.profiles[side+2].character.face])]:[star],kit:original?source.kit:star.kit,keeper:{...source.keeper},coach:{...source.coach},performance:{...source.performance}};
                selection[side]={team:index,player:0,partner:senSession.team?1:-1,reserve:-1};
            }
            competition=config.training?'training':'friendly';training=!!config.training;mode=config.training?'ai':'local';$('#training-size').value='solo';$('#training-partner').value='cpu';$('#training-drill').value='ground';$('#match-light').value='day';
            if(senSession.team)partyMatch={seats:config.profiles.map((p,i)=>({side:i%2,controller:i,name:p.character.nickname,peer:'server',local:0}))};
            start();if(training)resetTraining();if(config.penalties)startShootout();this.rating(config.profiles[0].rating);return this.snapshot();
        },
        input(side,value){
            const input=value||{};if(senSession?.team){const held=new Set(),edge=new Set(),old=partyInputs.get(side)?.senHeld||{};for(const [name,v]of Object.entries({left:input.left,right:input.right,up:input.jump,down:input.slide||input.low,jump:input.jump,slide:input.slide||input.low,kick:input.shoot,pass:input.pass,super:input.super})){if(v&&['left','right','up','down'].includes(name))held.add(name);if(v&&!old[name])edge.add(name);}partyInputs.set(side,{held,pressed:edge,senHeld:{left:input.left,right:input.right,up:input.jump,down:input.slide||input.low,jump:input.jump,slide:input.slide||input.low,kick:input.shoot,pass:input.pass,super:input.super},time:Date.now()});return;}const codes=side?['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyJ','KeyL']:['KeyA','KeyD','KeyW','KeyS','KeyV','KeyF','KeyB'];
            const values=[input.left,input.right,input.jump,input.slide||input.low,input.shoot,input.pass,input.super];
            codes.forEach((code,i)=>{if(values[i])keyDown(code);else keys[code]=false;});
            if(penalty&&!penalty.shot&&penalty.side===side&&input.shoot)shootPenalty(.5,input.high?.2:input.low?.85:penalty.aim.y);
            if(goalKick?.human&&goalKick.side===side&&(input.pass||input.shoot))takeGoalKick(players.find(p=>p.side===side));
        },
        step(dt){let remaining=Math.min(.1,Math.max(0,dt));while(remaining>1e-6){const step=Math.min(1/120,remaining);update(step);remaining-=step;}
            if(state==='draw-choice'){suddenDeath=true;time=0;screen('playing');announcement='ALTIN GOL';announceTime=1;}
            if(suddenDeath&&score[0]!==score[1]&&state==='playing')finish();
            if(senSession)senSession.sequence++;
        },
        snapshot(){const v=window.ArenaOnlineGame.snapshot();return {...v,engine:'golbol',rosterActors:!!senSession?.rosterActors,training,W,H,floor:FLOOR,sequence:senSession?.sequence||0,actors:v.players,elapsed:clock,reset:goalWait,penalties:shootout?{score:[...shootout.score],attempts:[...shootout.attempts],history:shootout.history.map(h=>[...h]),done:shootout.done}:null,finished:state==='result',winner:state==='result'?((shootout?.done?shootout.score:score)[0]>(shootout?.done?shootout.score:score)[1]?0:1):null};},
        receive(value){window.ArenaOnlineGame.receive(value);},
        paint(target){draw();if(target!==canvas){if(target.width!==canvas.width||target.height!==canvas.height){target.width=canvas.width;target.height=canvas.height;}target.style.aspectRatio=W+'/'+H;target.getContext('2d').drawImage(canvas,0,0);}},
        preview(context,character,x,y,scale=1){const original=c,base=teams.find(t=>!t.senTeam&&t.category!=='special'),star=window.ArenaSenPlayer.star({character,rating:60},base.players[0],window.ArenaSenHeadSkin?.[character.face]);c=context;try{c.save();c.translate(x,y);c.scale(scale,scale*1.08);drawPlayerAtSize({...makePlayer(0),x:0,y:0,team:{...base,kit:star.kit},star,dir:1,kick:0,walk:0,celebrating:false},true);c.restore();}finally{c=original;}},
        rating(value,side=0){if(!senSession)return;if(!senSession.rosterActors&&senSession.profiles[training?0:side])senSession.profiles[training?0:side].rating=value;for(const player of players)if(!senSession.rosterActors&&(training||(senSession.team?player.controller===side:player.side===side))){player.star.overall=value;player.star.senRatingMultiplier=window.ArenaSenCore.ratingBoost(value);}if(!training)return;const level=window.ArenaSenCore.keeperLevel(value);for(const keeper of keepers){keeper.senLevel=level;keeper.star.overall=value;}},
        inspect(){return {players,keepers,ball,score,W,H,training,state};},
        end(){if(!senSession)return;senSession=null;const saved=this.previous;this.previous=null;if(saved){saved.selection.forEach((v,i)=>selection[i]=v);competition=saved.competition;training=saved.training;mode=saved.mode;$('#training-size').value=saved.size;$('#training-drill').value=saved.drill;}home();}
    };
    window.ArenaLoadingPlayer=(context,x,y,phase)=>{const team=teams.find(t=>t.players.some(p=>/mbapp/i.test(p.realName||p.name)))||teams[1];const star=team.players.find(p=>/mbapp/i.test(p.realName||p.name))||team.players[0];const original=c;c=context;try{c.save();c.translate(x,y);c.scale(.95,.95);drawPlayerAtSize({...makePlayer(0),team,star,x:0,y:0,vx:0,dir:1,kickDir:1,kick:phase>.22&&phase<.49?Math.max(.01,KICK_DURATION-(phase-.22)*2):0,action:'kick',celebrating:false},true);c.restore();}finally{c=original;}};
    if(!window.ARENA_HEADLESS){resetPositions(); renderSelection(); screen('menu'); resizeCanvas(); requestAnimationFrame(frame);}
})();
