
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) {
                throw new Error('تعذر إرسال الرسالة');
            }

            alert('شكراً لك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك قريباً.');
            contactForm.reset();
        } catch (error) {
            alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
        } finally {
            submitButton.disabled = false;
        }
    });
}

const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        themeToggleBtn.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
}
