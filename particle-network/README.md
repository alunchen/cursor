# 粒子网络效果

这是一个使用HTML5 Canvas创建的粒子网络动画效果。效果展示了在黑色背景上移动的粒子，当粒子之间距离较近时会自动连线，形成网络状结构。

## 特点

- 纯JavaScript实现，无需外部库
- 响应式设计，自适应不同屏幕尺寸
- 粒子随机移动并在边界反弹
- 粒子之间根据距离自动连线
- 连线透明度根据距离动态变化
- 鼠标交互功能，粒子会被鼠标吸引
- 自动根据屏幕大小调整粒子数量，优化性能
- 内置FPS监控（可选启用）

## 使用方法

1. 克隆或下载此仓库
2. 在浏览器中打开`index.html`文件

## 自定义配置

可以在`script.js`文件中修改`particlesConfig`对象来自定义粒子效果：

```javascript
const particlesConfig = {
    baseDensity: 0.0001,  // 每平方像素的基础粒子数量
    minCount: 50,         // 最小粒子数量
    maxCount: 200,        // 最大粒子数量
    color: '#ffffff',     // 粒子颜色
    radius: {             // 粒子半径范围
        min: 1,
        max: 2
    },
    speed: {              // 粒子速度范围
        min: 0.1,
        max: 0.5
    },
    connectionDistance: 150, // 粒子连线的最大距离
    lineWidth: 0.3,       // 连线宽度
    mouseRadius: 150,     // 鼠标影响半径
    mouseForce: 0.05      // 鼠标影响力度
};
```

## 性能优化

- 粒子数量会根据屏幕大小自动调整，以保持良好的性能
- 可以通过取消注释`updateFPS()`函数来启用FPS监控
- 在较小的屏幕上会自动减少粒子数量，在较大的屏幕上会增加粒子数量

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Canvas API 



# 
Ctrl+K to generate a command
创建一个还原图片中效果的网页项目，使用html、css、js