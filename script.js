// High-level GDD content for each game
const highLevelContent = {
    shika: `
        <h2>🍵 I KNOW WHAT YOU WANT TO DRINK</h2>
        
        <div class="modal-section">
            <h3><i class="fas fa-lightbulb"></i> Core Concept</h3>
            <p>You're a stranded alien running a bar that only appears to people drowning in negative emotions. To survive and return home, you must chat, read their emotional "mask", and brew the right drink—harvesting their pain as fuel. Each customer has 3 chances. Fail 3 times = their bad ending. 2 days without enough points = you starve.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-sync-alt"></i> Core Loop</h3>
            <ul>
                <li><strong>Open shop</strong> → 2 customers per day</li>
                <li><strong>Chat</strong> → observe mask reactions (crack, tremble, change color)</li>
                <li><strong>Deduce</strong> real emotion (they can lie, mislead)</li>
                <li><strong>Brew</strong> drink matching emotion</li>
                <li><strong>Get feedback</strong> → correct: mask cracks more, new info; wrong: lose chance</li>
                <li><strong>Repeat</strong> up to 3 rounds per customer</li>
                <li><strong>End day</strong> → check survival points</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-mask"></i> The Mask System</h3>
            <p>Each customer wears an invisible emotional mask—your only UI to read them. Mask reacts in real-time:</p>
            <ul>
                <li><strong>Ask right:</strong> trembles, cracks, glows—reveals new clues</li>
                <li><strong>Ask wrong:</strong> stiffens, distorts, makes uncomfortable sounds</li>
                <li><strong>Brew right:</strong> mask slowly shatters, warm light—gain energy</li>
                <li><strong>Brew wrong:</strong> mask darkens, deforms—lose trust</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-wine-glass-alt"></i> 7 Emotions & Drinks</h3>
            <table>
                <tr><th>Emotion</th><th>Drink</th><th>Mask Reaction</th></tr>
                <tr><td>Sadness</td><td>Tea</td><td>Crying mask with a faint smile</td></tr>
                <tr><td>Anger</td><td>Water</td><td>Trembling frown, teeth grinding</td></tr>
                <tr><td>Fear</td><td>Coffee</td><td>Sweating, darting eyes</td></tr>
                <tr><td>Loneliness</td><td>Milk</td><td>Crack forming over the heart</td></tr>
                <tr><td>Guilt</td><td>Honey</td><td>Bowed down, heavy mask</td></tr>
                <tr><td>Envy</td><td>Ginger</td><td>Twitching mouth corner</td></tr>
                <tr><td>Helplessness</td><td>Cocoa</td><td>Empty stare, soft sigh</td></tr>
            </table>
            <p style="margin-top:12px;">Each customer has 1 main emotion + 0-2 sub-emotions. Difficulty increases daily.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-users"></i> 11 Customers</h3>
            <ul>
                <li><strong>Old teacher</strong> – Guilt + Loneliness (regret over his runaway child)</li>
                <li><strong>Has-been singer</strong> – Envy + Helplessness (jealous of younger artists)</li>
                <li><strong>Private eye</strong> – Fear + Anger (threatened, angry at injustice)</li>
                <li><strong>Lost child</strong> – Loneliness + Helplessness (abandoned)</li>
                <li><strong>Businesswoman</strong> – Sadness + Fear (bankrupt but hiding it)</li>
                <li><strong>Madman</strong> – Fear + Guilt (knows player's secret)</li>
                <li><strong>Lovesick guy</strong> – Anger + Sadness (betrayed)</li>
                <li><strong>Old flower seller</strong> – Helplessness + Sadness (amnesia, vague sadness)</li>
                <li><strong>Reformed conman</strong> – Guilt + Fear (wants redemption)</li>
                <li><strong>Blind girl</strong> – Fear + Helplessness (lost direction after accident)</li>
                <li><strong>"Faceless One"</strong> – Random (day 10, reflects player)</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-chart-line"></i> Progression & Endings</h3>
            <p><strong>Difficulty curve:</strong> Day 1-3: 1 emotion · Day 4-7: 1 main + 1 hidden · Day 8-10: 1 main + 2 hidden</p>
            <p><strong>Customer endings:</strong> True (3/3 correct) · Good (2/3) · Bad (0/3)</p>
            <p><strong>Player endings:</strong></p>
            <ul>
                <li>2 consecutive days total points < 3 → starve (bad end)</li>
                <li>After 10 days: ≥18 points → return home (good) · <18 points → FBI captures (bad)</li>
                <li>=18 points → secret easter egg</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-paint-brush"></i> Visual & Audio Direction</h3>
            <p><strong>Visual:</strong> 2D illustration, warm light inside bar vs cold outside. Masks deform by emotion. Slow shatter effect on true endings.</p>
            <p><strong>Audio:</strong> Slow jazz (warm piano, lazy bass). Each emotion adds a layer: sadness → violin, anger → heavy drums, fear → synth tremble. Audio distorts on wrong choices.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-graduation-cap"></i> What I Learned</h3>
            <ul>
                <li>Balancing narrative and gameplay: ensuring mask mechanics serve the story, not overshadow it</li>
                <li>Playtesting revealed 3 chances/customer felt punishing—adjusted to make failure meaningful but not frustrating</li>
                <li>Audio layering as a storytelling tool: players learned to associate sounds with emotional states</li>
                <li>Creating 11 distinct NPCs with minimal text, relying on visual/audio cues</li>
            </ul>
        </div>
    `,

    mrfixit: `
        <h2>🔧 MR.FIX-IT</h2>
        
        <div class="modal-section">
            <h3><i class="fas fa-lightbulb"></i> Core Concept</h3>
            <p>A simulation/puzzle hybrid where you play as a debt-ridden technician. Take on electrical repair jobs, solve wiring puzzles, manage your tools and time, and slowly build your reputation. Every choice matters—rush and make mistakes, or take your time and risk angry customers.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-sync-alt"></i> Core Loop</h3>
            <ul>
                <li>Receive job requests via phone (difficulty, reward, time limit)</li>
                <li>Travel to location (minigame: driving/fixing van)</li>
                <li>Diagnose problem (visual inspection, tool use)</li>
                <li>Solve wiring puzzle (color matching, circuit completion)</li>
                <li>Get paid → repay debt, buy better tools, unlock areas</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-puzzle-piece"></i> Puzzle Design</h3>
            <p><strong>3 difficulty levels:</strong></p>
            <ul>
                <li><strong>Basic:</strong> Match wire colors to ports (tutorial)</li>
                <li><strong>Intermediate:</strong> Follow circuit diagrams, avoid shorts</li>
                <li><strong>Advanced:</strong> Multi-step repairs, hidden faults, time pressure</li>
            </ul>
            <p>Each puzzle teaches a real electrical concept (simplified): series/parallel circuits, grounding, load balancing.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-coins"></i> Economy & Progression</h3>
            <table>
                <tr><th>Debt Tier</th><th>Amount</th><th>Unlocks</th></tr>
                <tr><td>Starter</td><td>50M</td><td>Basic tools, local jobs</td></tr>
                <tr><td>Tier 1</td><td>40M</td><td>Multimeter, better van</td></tr>
                <tr><td>Tier 2</td><td>25M</td><td>Power tools, city jobs</td></tr>
                <tr><td>Tier 3</td><td>10M</td><td>Apprentice helper</td></tr>
                <tr><td>Debt Free</td><td>0</td><td>Own shop, hire staff</td></tr>
            </table>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-mug-hot"></i> Customer System</h3>
            <ul>
                <li><strong>Patient:</strong> gives extra time, pays less</li>
                <li><strong>Impatient:</strong> short timer, pays bonus for speed</li>
                <li><strong>Cheapskate:</strong> negotiates price down</li>
                <li><strong>Rich:</strong> pays well, expects perfection</li>
                <li><strong>Scammer:</strong> tries to blame you for pre-existing damage</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-graduation-cap"></i> What I Learned</h3>
            <ul>
                <li>Balancing simulation depth with accessibility: electrical concepts need to be learnable without prior knowledge</li>
                <li>Economy pacing: too fast and debt feels meaningless, too slow and game feels grindy</li>
                <li>UI/UX for puzzle games: clear feedback when player makes correct/incorrect connections</li>
                <li>NPC personality through gameplay rather than dialogue: the timer and payment tell the story</li>
            </ul>
        </div>
    `,

    outworld: `
        <h2>👾 OUTWORLD DOMINION</h2>
        
        <div class="modal-section">
            <h3><i class="fas fa-lightbulb"></i> Core Concept</h3>
            <p>A fast-paced sci-fi FPS roguelike where combat is built around a "combo chain" system. Each kill without taking damage adds to your combo meter, unlocking temporary buffs and feeding into a dual-layer progression system: short-term combat boosts and long-term meta upgrades.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-sync-alt"></i> Core Loop</h3>
            <ul>
                <li>Enter zone → clear enemies</li>
                <li>Build combo by chaining kills (reset on damage)</li>
                <li>Combo milestones grant temporary buffs (speed, damage, shield)</li>
                <li>Clear zone → choose next path (reward type preview)</li>
                <li>After 3 zones → boss fight</li>
                <li>Defeat boss → unlock permanent upgrades for next run</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-bolt"></i> Combo System</h3>
            <table>
                <tr><th>Combo</th><th>Effect</th></tr>
                <tr><td>5 kills</td><td>+10% movement speed (10s)</td></tr>
                <tr><td>10 kills</td><td>+15% damage (10s)</td></tr>
                <tr><td>15 kills</td><td>Shield regenerates 1 segment</td></tr>
                <tr><td>20 kills</td><td>Ultimate ability ready</td></tr>
                <tr><td>25+ kills</td><td>All buffs active, bonus currency</td></tr>
            </table>
            <p>Taking damage resets combo to 0. High risk, high reward gameplay encourages aggressive but careful play.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-hat-wizard"></i> Build System</h3>
            <p><strong>Weapon types:</strong> Assault Rifle (balanced), Shotgun (close range), Railgun (sniper), Plasma (AoE), Minigun (high fire rate)</p>
            <p><strong>Perk categories:</strong></p>
            <ul>
                <li>Combo perks: extend buff duration, higher caps</li>
                <li>Survival perks: shields, health regen, damage reduction</li>
                <li>Currency perks: more credits, better shops</li>
                <li>Ultimate perks: customize special ability</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-dragon"></i> Boss Design</h3>
            <ul>
                <li><strong>Zone 1 Boss - The Warden:</strong> Teaches pattern recognition, slow projectiles</li>
                <li><strong>Zone 2 Boss - Celestial Core:</strong> Multi-phase, adds minions</li>
                <li><strong>Zone 3 Boss - Void Entity:</strong> Combines all mechanics, demands combo management</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-graduation-cap"></i> What I Learned</h3>
            <ul>
                <li>Roguelike balancing: ensuring RNG feels exciting, not frustrating</li>
                <li>Combo systems in FPS: rewarding skill without punishing experimentation</li>
                <li>Procedural generation: creating interesting combat encounters, not just random placement</li>
                <li>Boss pattern design: telegraphing attacks clearly while maintaining challenge</li>
            </ul>
        </div>
    `,

    witch: `
        <h2>🧙 A LITTLE WITCH</h2>
        
        <div class="modal-section">
            <h3><i class="fas fa-lightbulb"></i> Core Concept</h3>
            <p>A wholesome puzzle-adventure about a young witch who shrinks herself with a failed potion. Now the size of a mouse, she must navigate a giant household—climbing books like mountains, crossing kitchen floors like vast deserts—to gather ingredients and brew the antidote.</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-sync-alt"></i> Core Loop</h3>
            <ul>
                <li>Explore household "biomes" (Kitchen, Living Room, Study, Basement)</li>
                <li>Find ingredients (each biome has 1-2 key items)</li>
                <li>Solve environmental puzzles to access hard-to-reach places</li>
                <li>Avoid hazards (cats, spilled water, cleaning robots)</li>
                <li>Combine ingredients at cauldron (mini-game)</li>
                <li>Return to normal size and reach next area</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-puzzle-piece"></i> Puzzle Examples</h3>
            <ul>
                <li><strong>Kitchen:</strong> Climb hanging utensils, cross soapy water on a sponge raft</li>
                <li><strong>Living Room:</strong> Navigate carpet "forest," use thread to swing between furniture</li>
                <li><strong>Study:</strong> Solve book arrangement puzzles, ride paper airplanes</li>
                <li><strong>Basement:</strong> Light pathways with fireflies, avoid spider webs</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-flask"></i> Ingredient System</h3>
            <table>
                <tr><th>Ingredient</th><th>Location</th><th>Puzzle</th></tr>
                <tr><td>Moonflower</td><td>Window sill</td><td>Climb curtains at midnight</td></tr>
                <tr><td>Stardust</td><td>Old globe</td><td>Spin globe to release</td></tr>
                <tr><td>Frostpetal</td><td>Freezer</td><td>Navigate ice maze</td></tr>
                <tr><td>Embermoss</td><td>Fireplace</td><td>Time ashes falling</td></tr>
                <tr><td>Dreamcap</td><td>Under bed</td><td>Dodge dust bunnies</td></tr>
            </table>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-heart"></i> Tone & Themes</h3>
            <ul>
                <li><strong>Wholesome:</strong> No combat, just clever problem-solving</li>
                <li><strong>Perspective:</strong> Finding magic in everyday objects</li>
                <li><strong>Gentle challenge:</strong> Puzzles teach mechanics, never punish exploration</li>
                <li><strong>Visual:</strong> Warm, storybook illustration style</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-graduation-cap"></i> What I Learned</h3>
            <ul>
                <li>Designing for younger/cozy audiences: puzzles should be satisfying, not frustrating</li>
                <li>Environmental storytelling: letting the player discover the household's "giant" residents through context</li>
                <li>Scale puzzles: designing challenges that feel epic despite tiny scale</li>
                <li>Pacing in non-combat games: alternating exploration, puzzle, and story moments</li>
            </ul>
        </div>
    `
};

// Modal logic
const modal = document.getElementById('gddModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.high-level-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const gameKey = btn.getAttribute('data-game');

        if (gameKey && highLevelContent[gameKey]) {
            modalContent.innerHTML = highLevelContent[gameKey];
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});