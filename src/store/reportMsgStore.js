import { defineStore } from 'pinia'
import api from '../api/index'

export const reportMsgStore = defineStore('reportMsgStore', {
    state: () => {
        return {
            reportList: [],
            totalCount: 0,
            chooseReportDetail: {}
        }
    },

    actions: {
        async getReportListByPage(page) {
            const res = await api.report.getReportList({ page, limit: 6 })
            for (let report of res.data) {
                report.reportTime = report.reportTime.replace('T', ' ')
                const res = await api.report.searchTypeName(report.typeId)
                report.typeName = res.data.name
            }
            this.totalCount = res.totalCount
            this.reportList.push(...res.data)
        },

        chooseReport(detail) {
            if (detail.isReplied) {
                detail.replyTime = detail.replyTime.replace('T', ' ')
            }
            this.chooseReportDetail = { ...detail }
        },

        clearStatus() {
            this.reportList.length = 0
        }
    }
}) 