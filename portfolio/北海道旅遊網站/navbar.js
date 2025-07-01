// 北海道雪白風格導覽列JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 漢堡選單切換功能 - 北海道雪白風格
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            
            // 切換漢堡圖標 - 雪白主題
            if (navbarNav.classList.contains('active')) {
                navbarToggle.innerHTML = '❄️';
                // 添加關閉動畫
                navbarToggle.style.transform = 'rotate(180deg)';
                navbarToggle.style.color = '#87ceeb';
            } else {
                navbarToggle.innerHTML = '☰';
                navbarToggle.style.transform = 'rotate(0deg)';
                navbarToggle.style.color = '#2d5a87';
            }
        });
        
        // 點擊選單項目後關閉選單 - 加入雪花效果
        const navLinks = document.querySelectorAll('.navbar-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // 創建雪花點擊效果
                createSnowflakeEffect(this);
                
                navbarNav.classList.remove('active');
                navbarToggle.innerHTML = '☰';
                navbarToggle.style.transform = 'rotate(0deg)';
                navbarToggle.style.color = '#2d5a87';
            });
        });
        
        // 點擊外部關閉選單
        document.addEventListener('click', function(e) {
            if (!navbarToggle.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
                navbarToggle.innerHTML = '☰';
                navbarToggle.style.transform = 'rotate(0deg)';
                navbarToggle.style.color = '#2d5a87';
            }
        });
    }
    
    // 設定當前頁面的活動狀態
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
    // 北海道雪白風格滾動效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 向下滾動時調整導覽列 - 保持雪白風格
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '8px 0';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '15px 0';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // 添加雪白色漸變變化
        if (scrollTop > 200) {
            navbar.style.background = 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #e3f2fd 100%)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 北海道雪白特色互動效果
    initializeHokkaidoSnowEffects();
    
    // 啟動連續雪花粒子效果
    startSnowParticles();
});

// 創建雪花點擊效果
function createSnowflakeEffect(element) {
    const rect = element.getBoundingClientRect();
    const snowflakes = ['❄️', '❅', '✻', '❋', '🔷'];
    
    // 創建多個雪花
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            const randomFlake = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            
            snowflake.innerHTML = randomFlake;
            snowflake.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2 + (Math.random() - 0.5) * 50}px;
                top: ${rect.top + rect.height / 2}px;
                font-size: ${0.8 + Math.random() * 0.6}rem;
                pointer-events: none;
                z-index: 9999;
                color: #87ceeb;
                animation: snowflakeClick 1.5s ease-out forwards;
            `;
            
            document.body.appendChild(snowflake);
            
            // 1.5秒後移除雪花
            setTimeout(() => {
                snowflake.remove();
            }, 1500);
        }, i * 100);
    }
    
    // 添加雪花動畫CSS
    if (!document.getElementById('snowflake-animation')) {
        const style = document.createElement('style');
        style.id = 'snowflake-animation';
        style.textContent = `
            @keyframes snowflakeClick {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.5) rotate(180deg);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(0) rotate(360deg) translateY(-60px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 初始化北海道雪白特色效果
function initializeHokkaidoSnowEffects() {
    // Logo hover 雪花特效
    const logo = document.querySelector('.navbar-logo img');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            // 創建雪花爆發效果
            createSnowBurstEffect(this);
        });
    }
    
    // 右側小logo雪山效果
    const smallLogo = document.querySelector('.navbar-small-logo');
    if (smallLogo) {
        smallLogo.addEventListener('click', function() {
            // 創建雪山回音效果
            createSnowMountainEcho(this);
        });
    }
    
    // 導覽項目hover雪花融化效果
    const navItems = document.querySelectorAll('.navbar-nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // 創建雪花融化效果
            createSnowMeltEffect(this);
        });
    });
}

// 創建雪花爆發效果
function createSnowBurstEffect(element) {
    const crystals = ['❄️', '❅', '✻', '❋', '🔷', '💎'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const crystal = document.createElement('div');
            const randomCrystal = crystals[Math.floor(Math.random() * crystals.length)];
            
            crystal.innerHTML = randomCrystal;
            crystal.style.cssText = `
                position: absolute;
                left: ${Math.random() * 120 - 10}px;
                top: ${Math.random() * 60 - 10}px;
                font-size: ${0.6 + Math.random() * 0.4}rem;
                pointer-events: none;
                z-index: 9999;
                color: #87ceeb;
                animation: crystalBurst 2.5s ease-out forwards;
            `;
            
            element.parentElement.appendChild(crystal);
            
            setTimeout(() => crystal.remove(), 2500);
        }, i * 150);
    }
    
    // 添加水晶爆發動畫
    if (!document.getElementById('crystal-burst-animation')) {
        const style = document.createElement('style');
        style.id = 'crystal-burst-animation';
        style.textContent = `
            @keyframes crystalBurst {
                0% {
                    transform: translateY(0) scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translateY(-30px) scale(1.2) rotate(180deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(-60px) scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 創建雪山回音效果
function createSnowMountainEcho(element) {
    const rect = element.getBoundingClientRect();
    const mountains = ['🏔️', '⛰️', '🗻'];
    
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            const echo = document.createElement('div');
            const randomMountain = mountains[Math.floor(Math.random() * mountains.length)];
            
            echo.innerHTML = randomMountain;
            echo.style.cssText = `
                position: fixed;
                left: ${rect.left}px;
                top: ${rect.top}px;
                font-size: 1rem;
                pointer-events: none;
                z-index: 9999;
                color: #87ceeb;
                animation: mountainEcho 2s ease-out forwards;
                animation-delay: ${i * 0.2}s;
            `;
            
            document.body.appendChild(echo);
            
            setTimeout(() => echo.remove(), 3000);
        }, i * 150);
    }
    
    // 添加山峰回音動畫
    if (!document.getElementById('mountain-echo-animation')) {
        const style = document.createElement('style');
        style.id = 'mountain-echo-animation';
        style.textContent = `
            @keyframes mountainEcho {
                0% {
                    transform: scale(1);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(3.5) translateY(-40px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 創建雪花融化效果
function createSnowMeltEffect(element) {
    const drops = ['💧', '💦', '🔷'];
    const drop = document.createElement('div');
    const randomDrop = drops[Math.floor(Math.random() * drops.length)];
    
    drop.innerHTML = randomDrop;
    drop.style.cssText = `
        position: absolute;
        right: -20px;
        top: 50%;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 9999;
        color: #87ceeb;
        animation: snowMelt 1.2s ease-out forwards;
    `;
    
    element.appendChild(drop);
    
    setTimeout(() => drop.remove(), 1200);
    
    // 添加雪花融化動畫
    if (!document.getElementById('snow-melt-animation')) {
        const style = document.createElement('style');
        style.id = 'snow-melt-animation';
        style.textContent = `
            @keyframes snowMelt {
                0% {
                    transform: translateY(-50%) scale(0);
                    opacity: 1;
                }
                50% {
                    transform: translateY(-25%) scale(1);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(10%) scale(0.3);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 啟動連續雪花粒子效果
function startSnowParticles() {
    const snowflakes = ['❄️', '❅', '✻', '❋'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('snowflake-particle');
        particle.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
        particle.style.fontSize = (Math.random() * 0.5 + 0.8) + 'rem';
        
        document.body.appendChild(particle);
        
        // 動畫結束後移除粒子
        setTimeout(() => {
            particle.remove();
        }, 12000);
    }
    
    // 每500ms創建一個雪花粒子
    setInterval(createParticle, 500);
    
    // 初始創建一些粒子
    for (let i = 0; i < 8; i++) {
        setTimeout(createParticle, i * 200);
    }
} 