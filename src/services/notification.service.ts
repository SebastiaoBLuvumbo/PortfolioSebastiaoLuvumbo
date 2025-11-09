import { toast } from "react-toastify";
import { GeneralConstants } from "../constant/GeneralConstants";

export const NotificationService = {

    showToastMessage(messageType: number, message: any){
        switch(messageType){
            case GeneralConstants.MESSAGE_TYPE.SUCCESS:
            return toast.success(message)

            case GeneralConstants.MESSAGE_TYPE.WARN:
            return toast.warn(message)

            case GeneralConstants.MESSAGE_TYPE.ERROR:
            return toast.error(message)
        }
    }
}