import React from "react";

export interface SlideI {
    nRoute?: number;
    component: React.Component;
    aChild: SlideI[];
}

/**
 * Класс для работы с деревом сладов
 */
export class ClmRouter {

    private oSlide: SlideI;
    private bIsInit: boolean = false;

    constructor(oSlide: SlideI) {
        this.oSlide = oSlide;
    }


    private fMakeRoute() {
        if (!this.bIsInit) {
            throw new Error("ClmRouter is not init");
        }
        let nRoute = 1;
        // рекурсия обходчика дерева
        function fRuner(slide: SlideI) {
            if (slide) {
                // проставляем маршрут
                slide.nRoute = nRoute;
                nRoute++;
                for (let i = 0; i < slide.aChild.length; i++) {
                    fRuner(slide.aChild[i]);
                }
            }
        }
        fRuner(this.oSlide);
    }

    /**
     * инициализация
     * тут проставляются маршруты для слайдов
     */
    public fInit(): ClmRouter {
        this.fMakeRoute();
        this.bIsInit = true;
        return this;
    }


    /**
     * выдает слайд по его маршруту 
     * @param nRoute 
     */
    public fGetSlideByRoute(nRoute: number): SlideI | null {
        let resp: SlideI | null = null;

        // рекурся обходчик
        function fRuner(slide: SlideI, nRoute: number) {
            if (slide.nRoute !== nRoute) {
                for (let i = 0; i < slide.aChild.length; i++) {
                    fRuner(slide.aChild[i], nRoute);
                }
            } else {
                resp = slide;
            }
        }
        fRuner(this.oSlide, nRoute);

        return resp;
    }


    /**
     * выдает предыдущий слайд по номеру текущего 
     * @param nRoute 
     */
    public fGetPrevSlideByRoute(nRoute: number): SlideI | null {
        let resp: SlideI | null = null;

        // рекурся обходчик
        function fRuner(slide: SlideI, nRoute: number) {

            // обходим потомков
            for (let i = 0; i < slide.aChild.length; i++) {
                // если маршрут потомка совпадает
                if (slide.aChild[i].nRoute == nRoute) {
                    resp = slide.aChild[i];
                }
            }

            if (!resp) {
                for (let i = 0; i < slide.aChild.length; i++) {
                    fRuner(slide.aChild[i], nRoute);
                }
            }
        }
        fRuner(this.oSlide, nRoute);

        return resp;
    }
}