import sAxios from "../Axios"

export class ConversationService {
    static async getConversations() {
        const response = await sAxios.get(`/conversation`)
        return response?.data
    }

    static async createConversation(conversation) {
        const response = await sAxios.post(`/conversation/create/`, {
            ...conversation
        })
        return response?.data
    }

    static async updateConversation(conversation) {
        const response = await sAxios.put(`/conversation/${conversation.id}`, {
            ...conversation
        })
        return response?.data
    }

    static async deleteConversation(conversationId) {
        const response = await sAxios.delete(`/conversation/${conversationId}`)
        return response?.data
    }
}