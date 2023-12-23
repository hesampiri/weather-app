function countdays(date , hour){
    date.setTime(date.getTime() + hour * 60 * 60 * 1000)
    return date.getDay()
}
export default countdays