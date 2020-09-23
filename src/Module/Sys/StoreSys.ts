import { Subject } from 'rxjs';

/**
 * Тип колбэка для computed 
 */
type CallbackT<T> = (data: T) => void

/**
 * Шаблон store для подписки на события
 */
export class StoreSys<T> {

    protected subject: Subject<T>;
    protected data: T;

    /**
     * Конструктор на вход принимает дефолтные значения для хранилища``
     * @param initData<T> 
     */
    constructor(initData: T) {
        this.subject = new Subject<T>();
        this.data = initData;
    }

    /**
     * Установить данные
     * @param _data 
     * кода данные устанавливаются у всех подписанных
     * вызывает fGetData(callback)
     */
    public fSetData(_data: T) {
        this.subject.next(_data);
        this.data = _data;
    }

    /**
     * Computed метод для данных
     * @param callback - колбэк получения данных в нем можно сделать 
     * this.setState(data)
     */
    public fGetData(callback: CallbackT<T>) {
        this.subject.asObservable().subscribe((data: T) => {
            callback(data);
        });
    }
}