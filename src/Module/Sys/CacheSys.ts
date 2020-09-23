
export class ChacheSys {

    // название кэша с файлами
    private sChacheName = 'chache-v1';

    /**
     * список файлов для кэширования
     */
    private async faGetFileList(): Promise<string[]> {
        return [
            '/',
            'test.txt'
        ];
    }

    /**
     * предыдущие закэшированные файлы
     */
    private fGetPrevieList(): string[] {
        let aFromLocalStorage: string[] = [];
        try {
            aFromLocalStorage = JSON.parse(String(localStorage.getItem(this.sChacheName)));
        } catch (e) { }
        return aFromLocalStorage;
    }

    /**
     * сораняет предыдущие записи
     * @param aData 
     */
    private fSetPreviewList(aData: string[]): void {
        localStorage.setItem(this.sChacheName, JSON.stringify(aData));
    }



    /**
     * очистить весь кэш 
     */
    private async faClear(): Promise<void> {
        const vChache = await caches.open(this.sChacheName);
        const aKeys = await vChache.keys();
        for (let k = 0; k < aKeys.length; k++) {
            vChache.delete(aKeys[k]);
        }
    }


    /**
     * Обновляет кэш
     */
    public async faReloadCache(): Promise<void> {
        await this.faClear();

        const vChache = await caches.open(this.sChacheName);
        vChache.addAll(await this.faGetFileList());
    }
}