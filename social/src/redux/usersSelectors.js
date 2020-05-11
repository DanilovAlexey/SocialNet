import {createSelector} from 'reselect'
/* имитация тажелого селктора.
.filter создает кажды раз новый и объект + время на отработку
*/

const getUsersAllSelector = (state) => (state.usersPage.users)  // простой селектор


/* сли в mapstatetoprops передать этот метод, то будет все время ререндер, т.к. создается новый объект */
/*export const getUsersAllSelector = (state) => {
    return getUsersAll(state).filter(u => true)
}
*/
/* пример библиотеки реселект. При изменении getUsersall вызывается весь селект. Через запятую можно указать несколько селекторв */
export const getUsersAll = createSelector(getUsersAllSelector, 
    (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => (state.usersPage.pageSize)
export const getTotalUsersCount= (state) => ( state.usersPage.totalUsersCount)
export const getCurrentPage= (state) => ( state.usersPage.currentPage)
export const getIsFetching= (state) => ( state.usersPage.isFetching)
export const getFollowingProgress= (state) => ( state.usersPage.followingProgress)