// High-level GDD content for each game
const highLevelContent = {
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