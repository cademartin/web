document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-button');
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            const settingsPanel = document.getElementById('settings-panel');
            if (settingsPanel) {
                settingsPanel.classList.toggle('hidden');
            }
        });
    }

    const applyButton = document.getElementById('apply-settings');
    if (applyButton) {
        applyButton.addEventListener('click', function() {
            const bgColor = document.getElementById('bg-color');
            if (bgColor) {
                const opacity = document.getElementById('opacity');
                if (opacity) {
                    document.body.style.background = `linear-gradient(135deg, ${bgColor.value}, #c0c0c0)`;
                    const glassContainer = document.querySelector('.glass-container');
                    if (glassContainer) {
                        glassContainer.style.background = `rgba(255, 255, 255, ${opacity.value})`;
                    }

                    const settingsPanel = document.querySelector('.settings');
                    if (settingsPanel) {
                        settingsPanel.style.background = `rgba(255, 255, 255, ${opacity.value})`;
                    }
                }
            }

            const settingsPanel = document.getElementById('settings-panel');
            if (settingsPanel) {
                settingsPanel.classList.add('hidden');
            }
        });
    }
});
