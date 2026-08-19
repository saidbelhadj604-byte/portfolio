document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    // يمكنك هنا إضافة كود لإرسال الرسالة أو تخزينها
    alert('شكراً لك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك قريباً.');
    
    // مسح الحقول بعد الإرسال
    this.reset();
});
      
   const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

// التحقق من وجود الزر لتجنب الأخطاء
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = '☀️';
        } else {
            themeToggleBtn.textContent = '🌙';
        }
    });
}