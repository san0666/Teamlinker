import {ICommon_Model_Team} from '../model/team';
import {Permission_Types} from '../permission/permission';
import {ECommon_Services} from '../types';
import {
    ICommon_Route_Res_Organization_User_Item,
    ICommon_Route_Res_Organization_User_List,
    ICommon_Route_Res_Role_Item,
    ICommon_Route_Res_Role_List,
    ICommon_Route_Res_Team_List
} from './response';
import {ECommon_HttpApi_Method} from "./types";

const api={
    baseUrl:"/team",
    service:ECommon_Services.User,
    routes:{
        create:{//创建团队
            method:ECommon_HttpApi_Method.POST,
            path:"/item",
            req:<{
                name:string,
                photo?:string,
                description?:string
            }>{},
            res:<ICommon_Model_Team>{},
            permission:[Permission_Types.Organization.CREATE_TEAM]
        },
        info:{//团队信息
            method:ECommon_HttpApi_Method.GET,
            path:"/item",
            req:<{
                teamId:string                
            }>{},
            res:<ICommon_Model_Team>{},
            permission:[Permission_Types.Team.READ]
        },
        update:{//更新团队信息
            method:ECommon_HttpApi_Method.PUT,
            path:"/item",
            req:<{
                teamId:string,
                name?:string,
                photo?:string,
                description?:string
            }>{},
            res:<ICommon_Model_Team>{},
            permission:[Permission_Types.Team.EDIT]
        },
        remove:{//删除团队
            method:ECommon_HttpApi_Method.DELETE,
            path:"/item",
            req:<{
                teamId:string                
            }>{},
            res:{},
            permission:[Permission_Types.Team.DELETE]
        },
        members:{//团队成员列表
            method:ECommon_HttpApi_Method.GET,
            path:"/members",
            req:<{
                teamId:string,
                keyword?:string,
                page:number,
                size:number
            }>{},
            res:<ICommon_Route_Res_Organization_User_List>{},
            permission:[Permission_Types.Team.READ]
        },
        listUser:{
            method:ECommon_HttpApi_Method.GET,
            path:"/user/list",
            req:<{
                teamId:string,
                roleId?:string,
                keyword?:string,
                page:number,
                size:number
            }>{},
            res:<ICommon_Route_Res_Organization_User_List>{},
            permission:[Permission_Types.Team.READ]
        },
        addMember:{//添加团队成员
            method:ECommon_HttpApi_Method.POST,
            path:"/add_member",
            req:<{
                teamId:string,
                organizationUserId:string,
                roleId:string                
            }>{},
            res:<ICommon_Route_Res_Organization_User_Item>{},
            permission:[Permission_Types.Team.EDIT]
        },
        removeMember:{//删除团队成员
            method:ECommon_HttpApi_Method.DELETE,
            path:"/remove_member",
            req:<{
                teamId:string,
                organizationUserId:string
            }>{},
            res:{},
            permission:[Permission_Types.Team.EDIT]
        },
        changeRole:{//修改团队成员权限
            method:ECommon_HttpApi_Method.PUT,
            path:"/update_role",
            req:<{
                teamId:string,
                organizationUserId:string,
                roleId:string             
            }>{},
            res:<ICommon_Route_Res_Organization_User_Item>{},
            permission:[Permission_Types.Team.EDIT]
        },
        roles:{//团队权限列表
            method:ECommon_HttpApi_Method.GET,
            path:"/roles",
            req:<{
                teamId?:string
            }>{},
            res:<ICommon_Route_Res_Role_List>{},
            permission:[Permission_Types.Team.READ]
        },
        list:{
            method:ECommon_HttpApi_Method.GET,
            path:"/list",
            req:<{
                keyword?:string,
                page:number,
                size:number             
            }>{},
            res:<ICommon_Route_Res_Team_List>{},
            permission:[Permission_Types.Organization.READ]
        },
        filterTeam:{
            method:ECommon_HttpApi_Method.GET,
            path:"/filter",
            req:<{
                name:string      
            }>{},
            res:<{
                name:string,
                id:string,
                photo:string
            }[]>{},
            permission:[Permission_Types.Organization.READ]
        },
        addRole:{
            method:ECommon_HttpApi_Method.POST,
            path:"/role",
            req:<{
                teamId?:string,
                name :string,
                description?:string,
                value:number
            }>{},
            res:<ICommon_Route_Res_Role_Item>{},
            permission:[Permission_Types.Team.ADMIN]
        },
        editRole:{
            method:ECommon_HttpApi_Method.PUT,
            path:"/role",
            req:<{
                roleId:string,
                name?:string,
                description?:string,
                value?:number
            }>{},
            res:<ICommon_Route_Res_Role_Item>{},
            permission:[Permission_Types.Team.ADMIN]
        },
        removeRole:{
            method:ECommon_HttpApi_Method.DELETE,
            path:"/role",
            req:<{
                roleId:string,
            }>{},
            res:{},
            permission:[Permission_Types.Team.ADMIN]
        },
        getPermission:{
            method:ECommon_HttpApi_Method.GET,
            path:"/permission",
            req:<{
                teamId:string,
            }>{},
            res:<{
                value:number
            }>{},
            permission:[Permission_Types.Team.READ]
        },
        quit:{
            method:ECommon_HttpApi_Method.POST,
            path:"/quit",
            req:<{
                teamId:string,
            }>{},
            res:{},
            permission:[Permission_Types.Team.READ]
        }
    }
}
export default api