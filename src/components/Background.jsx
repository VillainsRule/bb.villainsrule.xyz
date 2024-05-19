import { useEffect } from 'react';

import * as PIXI from 'pixi.js';
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur';
import SimplexNoise from 'simplex-noise';

import styles from 'styles/global.module.css';

const random = (min, max) => Math.random() * (max - min) + min;
const map = (n, start1, end1, start2, end2) => ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;

const simplex = new SimplexNoise();

const randomColor = () => {
    const colorChoices = ['#2200dd', '#4f06f9', '#d006f9'];
    return colorChoices[~~random(0, colorChoices.length)].replace('#', '0x');
};

class Orb {
    bounds;
    x;
    y;
    scale;
    fill;
    radius;
    xOff;
    yOff;
    inc;
    graphics;

    constructor(fill = 0x000000) {
        this.bounds = this.setBounds();

        this.x = random(this.bounds['x'].min, this.bounds['x'].max);
        this.y = random(this.bounds['y'].min, this.bounds['y'].max);

        this.scale = 1;
        this.fill = fill;

        this.radius =
            window.innerWidth < 1000
                ? random(window.innerHeight / 8, window.innerHeight / 4)
                : random(window.innerHeight / 6, window.innerHeight / 3);

        this.xOff = random(0, 1000);
        this.yOff = random(0, 1000);

        this.inc = window.innerWidth < 1000 ? 0.002 : 0.002;

        this.graphics = new PIXI.Graphics();
        this.graphics.alpha = 0.825;
    };

    setBounds() {
        const maxDist = window.innerWidth < 1000 ? window.innerHeight / 8 : window.innerWidth / 5;
        const originX = window.innerWidth < 1000 ? window.innerWidth / 2 : window.innerWidth / 2;
        const originY = window.innerWidth < 1000 ? window.innerHeight / 2 : window.innerHeight / 2;

        return {
            x: { min: originX - maxDist, max: originX + maxDist },
            y: { min: originY - maxDist, max: originY + maxDist }
        };
    };

    update() {
        const xNoise = simplex.noise2D(this.xOff, this.xOff);
        const yNoise = simplex.noise2D(this.yOff, this.yOff);
        const scaleNoise = simplex.noise2D(this.xOff, this.yOff);

        this.x = map(xNoise, -1, 1, this.bounds['x'].min, this.bounds['x'].max);
        this.y = map(yNoise, -1, 1, this.bounds['y'].min, this.bounds['y'].max);
        this.scale = map(scaleNoise, -1, 1, 0.5, 1);

        this.xOff += this.inc;
        this.yOff += this.inc;
    };

    render() {
        this.graphics.x = this.x;
        this.graphics.y = this.y;
        this.graphics.scale.set(this.scale);
        this.graphics.clear();

        this.graphics.beginFill(this.fill);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
    };
};

class BackgroundManager {
    app;
    orbs;

    init() {
        if (this.app) return;

        this.app = new PIXI.Application({
            view: !document.querySelector('#orbs') ? undefined : document.querySelector('#orbs'),
            width: window.innerWidth,
            height: window.innerHeight,
            resizeTo: undefined,
            backgroundAlpha: true
        });

        this.app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

        this.orbs = [];

        for (let i = 0; i < 10; i++) {
            const orb = new Orb(randomColor());
            this.app.stage.addChild(orb.graphics);
            this.orbs.push(orb);
        };

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            this.app.ticker.add(() => {
                this.orbs?.forEach((orb) => {
                    orb.update();
                    orb.render();
                });
            });

        else this.orbs.forEach((orb) => {
            orb.update();
            orb.render();
        });
    };

    destroy() {
        if (this.app) return;
        this.app?.destroy?.();
        this.app = undefined;
        this.orbs = undefined;
    };
};

const bg = new BackgroundManager();

export const Background = () => {
    useEffect(() => {
        bg.init();
        return () => { bg.destroy(); };
    });

    return (
        <canvas className={styles.orbs} id='orbs'></canvas>
    );
};

export default Background;