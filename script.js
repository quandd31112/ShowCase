// High-level GDD content for each game
const highLevelContent = {
    wukongresearch: `
    <h2>WHY WUKONG CONTINUES TO ATTRACT PLAYERS</h2>

    <div class="modal-section">
        <h3>Research question</h3>
        <p>Why do Wukong-inspired characters and premium skins repeatedly attract players across games such as Honor of Kings, Arena of Valor, Mobile Legends, League of Legends, and Black Myth: Wukong?</p>
    </div>

    <div class="modal-section">
        <h3>Key findings</h3>
        <ul>
            <li><strong>Power fantasy:</strong> Wukong represents exceptional strength, magical versatility, freedom, and the confidence to challenge overwhelming authority.</li>
            <li><strong>Rebel archetype:</strong> Players connect with a rule-breaking hero who controls his own fate, similar to other popular rebel characters in games and anime.</li>
            <li><strong>Instant recognition:</strong> The staff, golden headband, tail, and phoenix-feather crown preserve the character's identity across radically different visual styles.</li>
            <li><strong>Nostalgia:</strong> Familiarity from Journey to the West, television, animation, comics, and earlier games reduces the effort needed to understand and trust the character.</li>
            <li><strong>Proven market value:</strong> Repeated investment by major studios reinforces Wukong as a commercially safer and already validated character fantasy.</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design takeaway</h3>
        <p>Wukong's appeal does not come from cultural recognition alone. It comes from the combination of a strong player fantasy, a durable character archetype, unmistakable visual anchors, emotional familiarity, and established commercial confidence.</p>
    </div>
`,
    grandmasbackyardgarden: `
    <h2>GRANDMA'S BACKYARD GARDEN</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>Grandma's Backyard Garden is a 2D top-down exploration and narrative minigame collection set around the back porch and garden of a Mekong Delta home in Vietnam. A boy has just been fed lunch by his grandma, then runs outside into a hot summer noon to play in the garden.</p>

        <p>The game is not about combat, score, or winning. Each small activity becomes a childhood memory: players finish a minigame or vignette, receive an item or story piece, then reveal a four-panel story with Space. When all major garden activities are complete, grandma calls the boy back inside; the player interacts with the home entrance, the screen fades to black, and credits roll like the end of a short film.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Move through the garden with WASD or Arrow keys</li>
            <li>Look for an E icon on interactive objects; the baby-bird tree and home entrance show the E icon above the player</li>
            <li>Press E or hold E to start an activity</li>
            <li>Play the minigame or vignette while movement is locked by the Canvas panel</li>
            <li>Receive an item or story piece, then reveal the four story frames with Space</li>
            <li>Completed activities lock and can change to an interacted sprite state</li>
            <li>After all main activities are complete, return to the home entrance for the ending and credits</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Movement and camera feel</h3>
        <ul>
            <li>2D free movement, not grid-based</li>
            <li>Player stays inside the yard/garden area while solid objects such as the pond, stove, house, tree roots, stones, and large bushes block movement</li>
            <li>Interaction uses trigger range on the actual GardenInteractable object, not detached trigger objects</li>
            <li>Camera follows the player but clamps to the map bounds so green outside-background or missing asset areas never show</li>
            <li>MinigameInputLock freezes movement whenever a minigame or storybook panel is open</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Activity chain</h3>
        <ul>
            <li>Catch a beetle in rustling grass, then use it at the ant nest</li>
            <li>Flip a brick or flat stone to find a PillBug, then race it in a Danisa tin</li>
            <li>Dig worms from soft soil and feed a baby bird on a low branch</li>
            <li>Catch snails in rain puddles and use them as fishing bait</li>
            <li>Catch fish at the pond, then release the fish after the memory beat</li>
            <li>Collect tadpoles and bring them to a glass jar to unlock the tadpole story</li>
            <li>Take a candle to the brick stove to create the fire plume story</li>
            <li>Shine the flashlight on strange birds around the yard edge to keep the environment alive</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>Childhood through small objects: each bug, puddle, brick, and stove should carry a specific feeling</li>
            <li>Child-made play: minigames are simple, but follow the logic of kids inventing games outside</li>
            <li>Environment interaction first, story after</li>
            <li>Each main activity is completed only once after its story piece is earned</li>
            <li>The ending is emotional closure: grandma calls from inside the house</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core systems</h3>
        <ul>
            <li>GardenInteractable component placed directly on each interactive object</li>
            <li>Inventory prerequisites for PillBug, Worm, Beetle, Snail, TadpoleJar, candle, and StoryPiece progression</li>
            <li>Canvas panels scaled to 1920x1080 with TextMeshProUGUI and a close button in the upper-left corner</li>
            <li>StoryProgress completion lock; failed minigames do not complete story keys and can be retried</li>
            <li>Ending unlock through the home entrance only after the required 10 story keys are complete</li>
        </ul>
    </div>
`,
    wheeloffate: `
    <h2>WHEEL OF FATE</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>Wheel of Fate is a dice-driven roguelite board RPG where players roll around a 12-tile wheel. Each tile is an encounter such as enemy, shop, gold, or mystery buff.</p>

        <p>The unique hook is that the wheel evolves from the player's own actions. Tiles level up after being resolved, so rewards become more valuable while dangerous tiles become more threatening.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Roll a die or use Controlled Roll if a charge is available</li>
            <li>Move the token around the wheel by the rolled number</li>
            <li>Open the encounter panel for the landed tile</li>
            <li>Resolve combat, shop, gold, or mystery buff</li>
            <li>Level up the tile after the panel closes</li>
            <li>Continue rolling while the wheel becomes richer and more dangerous</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>Roll tension: every roll should feel exciting and risky</li>
            <li>Self-made danger: farmed tiles evolve into bigger future threats</li>
            <li>Readable choices through shop, one-of-three buffs, controlled roll, and milestones</li>
            <li>Fast feedback for combat, rewards, tile level-up, and wheel shuffle</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core systems</h3>
        <ul>
            <li>12-tile wheel with enemy, shop, gold, and mystery buff nodes</li>
            <li>Tile-level progression after each encounter</li>
            <li>Player stats including HP, Max HP, ATK, Shield, Speed, Gold, and Controlled Roll charges</li>
            <li>Fate-control system to guarantee shop/gold pacing and early wheel coverage</li>
            <li>Milestone shuffle when the wheel reaches level thresholds</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and tone direction</h3>
        <p>The tone is dark-fantasy arcade with clear, fast-reading UI. The wheel, dice, encounter panels, health bars, reward cards, damage popups, and shuffle animations should be readable in one or two seconds.</p>
    </div>
`,
    slapabot: `
    <h2>SLAPABOT</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>SLAPABOT is a 2-lane arcade reaction runner where players control a robot running forward and survive by reading enemy patterns quickly. Each threat asks for a clear response: slash, block, switch lane, or activate a weapon skill.</p>

        <p>The core fantasy is simple to learn but tense to master: one-look readability, fast reaction feedback, and short runs that make players immediately understand what went wrong and want to retry.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Press Play from the idle/main menu</li>
            <li>Camera transitions into gameplay and enemy patterns begin spawning</li>
            <li>Read enemy type and lane position</li>
            <li>Slash breakable enemies, block blockable enemies, and dodge unbreakable threats</li>
            <li>Collect Energinum, build combo, and charge weapon energy</li>
            <li>Use weapon skill when energy is full</li>
            <li>React to rising speed, denser patterns, and power-up cubes</li>
            <li>Survive as long as possible to push score and mastery</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>One-look readability: enemy type must instantly communicate the needed action</li>
            <li>Fast reaction fantasy with satisfying hit, block, VFX, camera shake, and SFX feedback</li>
            <li>Short-run mastery where failure is quick, readable, and retry-friendly</li>
            <li>Light meta progression through weapons, gacha, Energinum, and power-ups</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core systems</h3>
        <ul>
            <li>Two-lane movement and lane switching</li>
            <li>Enemy pattern spawning from data</li>
            <li>Slash, block, dodge, and skill inputs</li>
            <li>Energy, combo, score, and Energinum collection</li>
            <li>Weapon manager, power-up cube, and end-run flow</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and audio direction</h3>
        <p>The game should use strong silhouettes, readable lane composition, punchy arcade VFX, clear enemy telegraphs, and responsive audio for hits, blocks, skills, pickups, and failure moments.</p>
    </div>
`,
    joyeuse: `
    <h2>JOYEUSE</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>JOYEUSE is a 2D cozy fantasy RPG / light auto-combat game where players become a young human leaving the western village of Joyeuse to prove that strength comes from adaptation, not race or bloodline.</p>

        <p>The player chooses a starting class, travels through a linear world map, challenges cute tribes with distinct combat identities, collects gear and souls, opens skill tree nodes, and eventually faces the VOID EMPEROR on the path toward becoming the All-Round Warrior.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Create or load a save, enter a name, and choose one of four classes</li>
            <li>Start at BASE to recover HP, manage inventory, shop, soul, skill tree, achievements, and map</li>
            <li>Select a map area, review enemy / loot preview, and travel when unlock conditions are met</li>
            <li>Let auto-combat run by cadence while intervening with Timing Strike QTE and quick consumables</li>
            <li>Earn EXP, Gold, loot, and soul progress after each enemy</li>
            <li>Choose level-up upgrades, equip better items, open skill nodes, socket souls, and unlock the next area</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core systems</h3>
        <ul>
            <li>Four class identities: Ranger, Tanker, Warrior, and Assassin</li>
            <li>Auto-combat cadence driven by SPD, accuracy, dodge, crit, double attack, armor, penetration, and status effects</li>
            <li>Timing Strike QTE with Good / Perfect stun rewards</li>
            <li>Loot and equipment system with rarity, set bonuses, weapon effects, consumables, and materials</li>
            <li>Skill tree built on a 5x5 node grid with SP and Gold costs</li>
            <li>Soul socket system that turns repeated enemy mastery into build customization</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>World progression</h3>
        <p>The campaign moves from BASE through 19 map points across seven biomes. Each region introduces a tribe, a combat lesson, its own loot identity, story panels, and a boss milestone.</p>
        <ul>
            <li>Cloverbell Meadow: Piglet tribe, defense and straightforward attacks</li>
            <li>Whisperleaf Woods: Pup tribe, speed, pack behavior, timing, and protection</li>
            <li>Lilybog Marsh: Frog tribe, rhythm, poison, and balance</li>
            <li>Bubbletide Coast: Sea tribe, wave-like attack patterns and blind effects</li>
            <li>Snowcap Peaks: Snow tribe, stamina, armor, cold, and stun pressure</li>
            <li>Emberglow Lands: Flame tribe, burn, damage spikes, and resource pressure</li>
            <li>THE VOID: final test of build knowledge, resilience, and adaptation</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>Easy to enter combat, deep enough to optimize builds</li>
            <li>Linear journey with clear biome milestones and boss checks</li>
            <li>Continuous progression through kills, EXP, Gold, loot, upgrades, skill points, and souls</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and tone direction</h3>
        <p>The visual direction is 2D cozy fantasy with cute characters, readable silhouettes, bright biome palettes, clear RPG UI panels, and distinct rarity colors. The tone keeps battles friendly and storybook-like: enemies are rivals and teachers, not villains, and victory represents growth through learning.</p>
    </div>
`,
    chick: `
    <h2>CHICK CHICK</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>CHICK CHICK placed Top 7 / 206 in Fun Factor and Top 17 / 206 in Effort at My First Jam! 2026.</p>
        <p>A grid-based puzzle game about guiding a chick back to its mother. The level sequence teaches each rule through spatial arrangement, then combines established mechanics to increase reasoning depth without introducing random difficulty.</p>
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
            <li>10-level learning progression: one readable rule at a time</li>
            <li>Teach through spatial arrangement rather than excessive tutorial text</li>
            <li>Combine learned rules only after players have encountered them individually</li>
            <li>Use clear feedback for every interaction</li>
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
    ikwywtd: `
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
`,
    waterpuzzle: `
    <h2>WATER PUZZLE</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>A mobile-first routing puzzle designed for portrait, one-handed play. Players place and rotate functional blocks before releasing the water, creating a planning challenge built around spatial reasoning, sequencing, and readable cause and effect.</p>

        <p>Created as a rapid prototype under a 24-hour competition constraint, the system was designed to support scalable level production through reusable rules.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Read the layout and target route</li>
            <li>Place and rotate functional blocks before releasing the water</li>
            <li>Watch the flow and identify the error or successful path</li>
            <li>Revise the routing plan and retry</li>
            <li>Move to a puzzle with expanded planning depth</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>Placement-and-routing decisions suited to short mobile sessions</li>
            <li>Difficulty grows through grid size, pipe behavior, and planning depth rather than arbitrary randomness</li>
            <li>Clear visual feedback makes flow errors understandable</li>
            <li>Reusable level-design rules support scalable production</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Event context</h3>
        <p>Event: Prompt to Play by VNG.</p>
    </div>
`,
    towerconnections: `
    <h2>TOWER CONNECTIONS</h2>

    <div class="modal-section">
        <h3>High-level concept</h3>
        <p>Tower Connections is a 2D tower defense roguelite built around a Nexus network. Players do not only place towers to shoot enemies; they create energy links between towers, and enemies are affected when they cross those links.</p>

        <p>The core strategy comes from tower position, tower color, and link coverage. Players win by arranging a graph of towers so the energy lines cut through the enemy road as often and as clearly as possible.</p>
    </div>

    <div class="modal-section">
        <h3>Core loop</h3>
        <ul>
            <li>Start a fresh run from the main menu</li>
            <li>Receive an opening hand with a Damage tower and one random tower</li>
            <li>Drag tower cards onto valid slots to create the first connection</li>
            <li>Watch enemies travel along a rounded zig-zag lane</li>
            <li>Use tower links to damage, slow, poison, or stun enemies as they cross</li>
            <li>Earn points from kills and choose one of three random rewards</li>
            <li>Draft new towers, tower buffs, or temporary enemy debuffs</li>
            <li>Keep optimizing the network before enemies reach the core three times</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Design pillars</h3>
        <ul>
            <li>Spatial synergy over raw tower count</li>
            <li>Fast onboarding through simple drag-and-drop placement</li>
            <li>Readable chaos with bright links, clear enemies, and strong feedback</li>
            <li>Light roguelite drafting through random reward choices</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Core systems</h3>
        <ul>
            <li>Automatic full-map tower linking based on placed towers</li>
            <li>Color-based link effects such as damage, slow, poison, and stun</li>
            <li>Placement slots that appear only while dragging to reduce clutter</li>
            <li>Enemy lane, life-loss, wave pressure, and reward milestone systems</li>
            <li>Data-driven reward and balance direction for future tuning</li>
        </ul>
    </div>

    <div class="modal-section">
        <h3>Visual and audio direction</h3>
        <p>The prototype direction is bright arcade defense: clean board readability, large hand-drawn sprites, rounded yellow-white roads, colorful tower cards, and vivid link colors. Audio hooks reinforce placement, linking, rewards, hits, and core damage.</p>
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
