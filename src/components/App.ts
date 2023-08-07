/**
 * Created by jijevoid on 2023/4/12
 */

import { Application, Assets, Sprite,Container } from 'pixi.js';
// const fileUrl = `./test.jpg`
function getUrl(){
    return new URL(`./test.jpg`, import.meta.url).href
}
class App{
    // 单例
    private static instance:App|null = null
    public static getInstance = function (){
        if(!App.instance){
            App.instance = new App()
        }
        return App.instance
    }

    /**
     * mean pixi应用
     * @private
     */
    public application:Application = new Application()

    /**
     * mean 初始化
     * @param appEl 绑定的dom元素
     */
    public init = async function(appEl:any){
        const self = this;
        const { application } = this
        // 支持 chrome的pixijs 调试插件
        // @ts-ignore
        globalThis.__PIXI_APP__ = application;

        appEl.value.appendChild(self.application.view);
        const texture = await Assets.load(getUrl());
        console.log(texture);
        const bunny = new Sprite(texture);

        bunny.x = self.application.renderer.width / 2;
        bunny.y = self.application.renderer.height / 2;

        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        self.application.stage.addChild(bunny);
        let move = () => {
            bunny.rotation += 0.01;
        }
        self.application.ticker.add(move);

        setTimeout(()=>{
            self.application.ticker.remove(move)
        },4000)
    }
}

export default App
