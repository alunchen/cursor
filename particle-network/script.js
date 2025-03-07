document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // 粒子配置
    const particlesConfig = {
        baseDensity: 0.0001,  // 每平方像素的基础粒子数量
        minCount: 80,         // 最小粒子数量
        maxCount: 200,        // 最大粒子数量
        color: '#ffffff',
        radius: {
            min: 1,
            max: 3
        },
        speed: {
            min: 0.2,
            max: 0.8
        },
        connectionDistance: 150,
        lineWidth: 0.5,
        mouseRadius: 150,
        mouseForce: 0.05
    };
    
    // 粒子数组
    let particles = [];
    
    // 粒子类
    class Particle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.radius = Math.random() * (particlesConfig.radius.max - particlesConfig.radius.min) + particlesConfig.radius.min;
            this.speedX = (Math.random() - 0.5) * (particlesConfig.speed.max - particlesConfig.speed.min) + particlesConfig.speed.min;
            this.speedY = (Math.random() - 0.5) * (particlesConfig.speed.max - particlesConfig.speed.min) + particlesConfig.speed.min;
            this.originalSpeedX = this.speedX;
            this.originalSpeedY = this.speedY;
            this.lastMouse = {x: this.x, y: this.y};
        }
        
        // 更新粒子位置
        update() {
            // 鼠标交互
            if (mouse.x !== undefined && mouse.y !== undefined) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    // 计算鼠标影响力度，距离越近影响越大
                    const force = (mouse.radius - distance) / mouse.radius;
                    
                    // 向鼠标方向移动
                    this.speedX += dx * force * particlesConfig.mouseForce;
                    this.speedY += dy * force * particlesConfig.mouseForce;
                } else {
                    // 逐渐恢复原始速度
                    this.speedX = this.speedX * 0.98 + this.originalSpeedX * 0.02;
                    this.speedY = this.speedY * 0.98 + this.originalSpeedY * 0.02;
                }
            } else {
                // 鼠标不在窗口内，逐渐恢复原始速度
                this.speedX = this.speedX * 0.98 + this.originalSpeedX * 0.02;
                this.speedY = this.speedY * 0.98 + this.originalSpeedY * 0.02;
            }
            
            // 限制最大速度
            const maxSpeed = 2;
            const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (currentSpeed > maxSpeed) {
                this.speedX = (this.speedX / currentSpeed) * maxSpeed;
                this.speedY = (this.speedY / currentSpeed) * maxSpeed;
            }
            
            this.x += this.speedX;
            this.y += this.speedY;
            
            // 边界检测
            if (this.x < 0 || this.x > window.innerWidth) {
                this.speedX = -this.speedX;
                this.originalSpeedX = -this.originalSpeedX;
            }
            
            if (this.y < 0 || this.y > window.innerHeight) {
                this.speedY = -this.speedY;
                this.originalSpeedY = -this.originalSpeedY;
            }
            
            // 确保粒子在画布内
            this.x = Math.max(0, Math.min(window.innerWidth, this.x));
            this.y = Math.max(0, Math.min(window.innerHeight, this.y));
        }
        
        // 绘制粒子
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = particlesConfig.color;
            ctx.fill();
        }
        
        // 连接粒子
        connect() {
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                if (this === particle) continue;
                
                const distance = Math.sqrt(
                    Math.pow(this.x - particle.x, 2) + 
                    Math.pow(this.y - particle.y, 2)
                );
                
                if (distance < particlesConfig.connectionDistance) {
                    // 根据距离计算线条透明度
                    const opacity = 1 - (distance / particlesConfig.connectionDistance);
                    
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(particle.x, particle.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = particlesConfig.lineWidth;
                    ctx.stroke();
                }
            }
        }
    }
    
    // 计算粒子数量
    function calculateParticleCount() {
        const area = canvas.width * canvas.height;
        const count = Math.floor(area * particlesConfig.baseDensity);
        return Math.min(Math.max(count, particlesConfig.minCount), particlesConfig.maxCount);
    }
    
    // 设置canvas尺寸为窗口大小
    function resizeCanvas() {
        // 设置为设备像素比，解决高分辨率屏幕模糊问题
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // 缩放上下文以匹配设备像素比
        ctx.scale(dpr, dpr);
        
        // 设置canvas的CSS尺寸
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }
    
    // 初始化粒子
    function initParticles() {
        particles = [];
        const count = calculateParticleCount();
        console.log(`创建 ${count} 个粒子`);
        
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    // 鼠标位置
    let mouse = {
        x: undefined,
        y: undefined,
        radius: particlesConfig.mouseRadius
    };
    
    // 监听鼠标移动
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    // 鼠标离开窗口时重置鼠标位置
    window.addEventListener('mouseout', function() {
        mouse.x = undefined;
        mouse.y = undefined;
    });
    
    // 动画循环
    function animate() {
        // 清除画布
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        // 更新和绘制所有粒子
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        
        // 连接粒子
        for (let i = 0; i < particles.length; i++) {
            particles[i].connect();
        }
        
        // 继续动画循环
        requestAnimationFrame(animate);
    }
    
    // 初始化时调整大小
    resizeCanvas();
    
    // 初始化粒子
    initParticles();
    
    // 窗口大小改变时重新调整
    window.addEventListener('resize', function() {
        resizeCanvas();
        initParticles();
    });
    
    // 开始动画
    animate();
    
    // 显示FPS计数器（可选，用于性能调试）
    let fps = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    
    function updateFPS() {
        frameCount++;
        const currentTime = performance.now();
        const elapsed = currentTime - lastTime;
        
        if (elapsed >= 1000) {
            fps = Math.round((frameCount * 1000) / elapsed);
            frameCount = 0;
            lastTime = currentTime;
            console.log(`FPS: ${fps}, 粒子数: ${particles.length}`);
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    // 启用FPS计数器
    updateFPS();
}); 