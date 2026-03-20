// High-level GDD content for each game
const highLevelContent = {
    chick: `
    <h2>CHICK CHICK</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>CHICK CHICK is a grid-based puzzle game where players control a small chick on a journey to find its mother. 
        The game focuses on learning through interaction, where players understand mechanics naturally by playing instead of following tutorials.</p>

        <p>The core experience is built around clarity, logic, and progression — each level introduces a new mechanic, 
        then combines it with previous ones to create more complex and satisfying challenges.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Start the level</li>
            <li>Observe the environment and mechanics</li>
            <li>Plan a solution</li>
            <li>Move and interact (push blocks, activate systems)</li>
            <li>Avoid traps and hazards</li>
            <li>Find and collect the key</li>
            <li>Reach the exit door</li>
            <li>Proceed to the next level</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core mechanics</h3>
        <ul>
            <li>Push block to manipulate space and paths</li>
            <li>Pressure plate & side door system</li>
            <li>Ice floor causing continuous movement</li>
            <li>Timed traps with active/inactive states</li>
            <li>Enemy that chases the player</li>
            <li>Portal system for instant teleportation (A ↔ B)</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Level design philosophy</h3>
        <ul>
            <li>Introduce → Combine → Increase complexity</li>
            <li>No repetition between levels</li>
            <li>Teach through gameplay (no tutorial)</li>
            <li>Clear visual feedback for all interactions</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Difficulty and progression</h3>
        <ul>
            <li>Difficulty scales through mechanic combination, not randomness</li>
            <li>Players are challenged through spatial reasoning and logic</li>
            <li>Each level builds on previous knowledge</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and tone direction</h3>
        <p>The game uses a simple and cute visual style to contrast with its logical challenges. 
        The tone is light and approachable, while the puzzle design remains thoughtful and structured. 
        Clear visual feedback is emphasized to ensure players always understand the result of their actions.</p>
    </div>
`,
    shika: `
        <h2>I KNOW WHAT YOU WANT TO DRINK</h2>

        <div class="modal-section">
            <h3>High-level concept</h3>
            <p>You play as an alien stranded on Earth who disguises themselves as a bartender. 
            The bar only appears to people carrying strong negative emotions. 
            To survive and recharge your spaceship, you must harvest these emotions by guiding 
            customers through conversations and brewing drinks that match their emotional state. 
            The alien does not truly understand human emotions, so the player must analyze clues 
            and choose questions and drinks carefully.</p>
        </div>

        <div class="modal-section">
            <h3>Core loop</h3>
            <ul>
                <li>Open the bar</li>
                <li>Talk with the customer</li>
                <li>Analyze their real emotion through dialogue, mask, background and music</li>
                <li>Brew the appropriate drink</li>
                <li>Customer leaves</li>
                <li>Repeat for 3 customers</li>
                <li>End the day and check emotional points</li>
                <li>Start the next day and read the newspaper</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Ending conditions</h3>
            <p>Each character can reach different endings depending on the number of correct choices.</p>
            <ul>
                <li>5/5 correct → True Ending</li>
                <li>>4/5 correct → Good Ending</li>
                <li><3/5 correct → Bad Ending</li>
            </ul>

            <p>Player survival conditions:</p>
            <ul>
                <li>If for two consecutive days the player scores less than 4 points, the alien starves and dies.</li>
                <li>After 5 days the total emotional points determine the final ending.</li>
                <li>>22 points → Good ending (enough fuel to return home)</li>
                <li>>50 points → True ending</li>
                <li>=31 points → Special secret ending</li>
                <li><20 points → Bad ending (captured by investigators)</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Emotion system</h3>
            <table>
                <tr><th>Emotion</th><th>Mask Color</th><th>Background</th><th>Music</th></tr>
                <tr><td>Sadness</td><td>Blue</td><td>Blue</td><td>Slow</td></tr>
                <tr><td>Anger</td><td>Red</td><td>Orange</td><td>Fast</td></tr>
                <tr><td>Fear</td><td>Purple</td><td>Blue</td><td>Broken rhythm</td></tr>
                <tr><td>Regret</td><td>Black</td><td>Gray</td><td>Slow</td></tr>
                <tr><td>Envy</td><td>Orange</td><td>Orange</td><td>Fast</td></tr>
                <tr><td>Helplessness</td><td>White</td><td>Gray</td><td>Broken rhythm</td></tr>
            </table>
        </div>

        <div class="modal-section">
            <h3>Brew system</h3>
            <table>
                <tr><th>Emotion</th><th>Main Drink</th><th>Secondary Drink</th></tr>
                <tr><td>Sadness</td><td>Vodka</td><td>Orange</td></tr>
                <tr><td>Anger</td><td>Gin</td><td>Tonic</td></tr>
                <tr><td>Fear</td><td>Rum</td><td>Coca</td></tr>
                <tr><td>Regret</td><td>Brandy</td><td>Soda</td></tr>
                <tr><td>Envy</td><td>Whiskey</td><td>Ginger ale</td></tr>
                <tr><td>Helplessness</td><td>Tequila</td><td>Pomegranate</td></tr>
            </table>
            <p>If a customer has two emotions, the main drink corresponds to the dominant emotion 
            while the secondary drink corresponds to the weaker emotional signal.</p>
        </div>

        <div class="modal-section">
            <h3>Day structure</h3>
            <ul>
                <li>Each day has 3 customers.</li>
                <li>Players must gain enough emotional points to survive.</li>
                <li>Events and emotional complexity increase as days progress.</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Visual and audio direction</h3>
            <p>The game uses a 2D dark cozy art style. The bar interior is warm and safe, 
            while the outside world feels cold and heavy. Each customer wears a mask 
            reflecting their emotional state. Background color and music change according 
            to the dominant emotion. When a good or true ending is reached, the mask cracks 
            and warm light spreads.</p>
        </div>
    `,
    mrfixit: `
        <h2>MR. FIX-IT</h2>

        <div class="modal-section">
            <h3>High-level concept</h3>
            <p>MR. FIX-IT is a simulation and puzzle game where the player takes the role of a freelance electrician. 
            Starting with simple tasks like replacing light bulbs or fixing sockets, the player gradually progresses 
            to repairing complex electrical systems in large houses, villas and industrial buildings.</p>

            <p>The core experience focuses on the feeling of career progression — beginning as a small handyman 
            and eventually becoming a highly skilled electrical technician capable of solving large-scale problems.</p>
        </div>

        <div class="modal-section">
            <h3>Core loop</h3>
            <ul>
                <li>Start in the office</li>
                <li>Open the computer and receive a repair mission</li>
                <li>Read the problem description and recommended tools</li>
                <li>Select tools within limited inventory slots</li>
                <li>Travel to the job location</li>
                <li>Find the broken electrical components</li>
                <li>Complete repair minigames and quick time events</li>
                <li>Receive money and rating</li>
                <li>Return to the office and upgrade tools or equipment</li>
                <li>Accept the next mission</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Player progression</h3>
            <ul>
                <li>Earn money from completed repair jobs</li>
                <li>Upgrade tools to reduce minigame difficulty</li>
                <li>Upgrade office to unlock new tools</li>
                <li>Unlock larger and more complex locations</li>
                <li>Progress from small apartments to large construction sites</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Core systems</h3>
            <ul>
                <li>Tool selection system (limited inventory)</li>
                <li>Quest receiving system from the office PC</li>
                <li>Location exploration system</li>
                <li>Electrical repair minigames</li>
                <li>Upgrade system for tools and office</li>
                <li>Rating and coin reward system</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Visual and audio direction</h3>
            <p>The game uses a casual flat cartoon style with warm pastel colors. 
            The tone is light and cozy, similar to games like Good Pizza Great Pizza and 
            A Little to the Left. Music is playful and cartoon-like to support a relaxing 
            but engaging work atmosphere.</p>
        </div>
    `,
    outworld: `
    <h2>OUTWORLD DOMINION</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>Outworld Dominion is a fast-paced sci-fi FPS roguelike where players fight through hostile planets 
        in short but intense combat runs. Each run generates different buffs, equipment and enemy encounters, 
        allowing players to shape their own combat style while surviving increasingly brutal battles.</p>

        <p>The core fantasy focuses on aggressive combat, rapid power scaling and strong replayability. 
        Players grow stronger during each run through powerful buffs and equipment combinations while 
        mastering skill-based movement, aiming and enemy pattern reading.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Start in the spaceship hub</li>
            <li>Upgrade gear, craft equipment or use gacha</li>
            <li>Select a mission and starting buff</li>
            <li>Deploy to a hostile planet</li>
            <li>Complete multiple objectives while fighting waves of enemies</li>
            <li>Receive buffs after completing objectives</li>
            <li>Defeat the zone boss</li>
            <li>Collect loot and resources</li>
            <li>Return to the spaceship hub</li>
            <li>Upgrade equipment and prepare for the next run</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Progression system</h3>
        <ul>
            <li>In-run progression through temporary buffs and item synergy</li>
            <li>Meta progression through equipment upgrades and skill trees</li>
            <li>Unlock new characters, weapons and planets</li>
            <li>Difficulty increases as players conquer stronger planets</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Combat system</h3>
        <ul>
            <li>Fast paced arena FPS combat</li>
            <li>Continuous enemy spawn creating constant pressure</li>
            <li>Movement focused gameplay with dash and vertical mobility</li>
            <li>Skill-based aiming and pattern recognition against bosses</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and tone direction</h3>
        <p>The game presents a brutal sci-fi atmosphere where players fight against hostile alien ecosystems. 
        Environments include desert worlds, acid planets, ocean planets and death zones, each with unique 
        hazards and enemy behaviors. The tone combines survival tension with explosive power fantasy combat.</p>
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