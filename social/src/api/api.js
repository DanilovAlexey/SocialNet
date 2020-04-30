import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c455de4b-69df-4d46-90f3-1cddd100c2fa'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id) {
        console.warn('Obsolete method. Use profileAPI object')
        return profileAPI.getProfile(id)
    }

}

export const authAPI = {
    authRequest() {
        return instance.get(`auth/me`)
    }
}


export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
        .then(response => {
            return response.data
          })
    },
    
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }

}
