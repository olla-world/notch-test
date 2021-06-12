import moment from "moment"

const MMM_DD_YYYY = (date) => date? moment(date).format("MMM, DD, YYYY"):''

export {
    MMM_DD_YYYY
}