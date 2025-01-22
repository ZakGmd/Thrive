class ScreenUi {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;

    constructor(width: number = 2100, height: number = 650) { // iPhone 14 Pro resolution
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        
        const context = this.canvas.getContext('2d');
        if (!context) throw new Error('Could not get 2d context');
        this.ctx = context;
    }

    drawSimpleText() {
        // Clear screen first
       
        // Set high pixel ratio for sharp text
        this.ctx.textRendering = 'optimizeLegibility';
        this.ctx.imageSmoothingEnabled = true;

        // Draw main title with shadow for better visibility
        this.ctx.save();
        this.ctx.shadowColor = 'rgba(242, 117, 0, 0.3)';
        this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = '#F27500';
        this.ctx.font = 'bold 200px Inter, Arial'; // Increased font size
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle'; // This helps center vertically
        this.ctx.fillText('Hello!', this.width/2, this.height/4);
        this.ctx.restore();

        // Draw subtitle
        this.ctx.save();
        this.ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
        this.ctx.shadowBlur = 5;
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = '100px Inter, Arial'; // Increased font size
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('Welcome Back', this.width/2, this.height/4 + 150);
        this.ctx.restore();
    }

    getCanvas() {
        return this.canvas;
    }
}

export default ScreenUi;