import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('Cars')
    },
    show(CarId) {
        return Api().get('Car/' + CarId)
    },
    post(Car) {
        return Api().post('Car', Car)
    },
    put(Car) {
        return Api().put('Car/' + Car.id, Car)
    },
    delete(Car) {
        return Api().delete('Car/' + Car.id, Car)
    },
}