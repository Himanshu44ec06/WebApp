import  { GlobalVariable }  from  './global'


export const Constant  = Object.freeze({
    NoImageURL : 'http://chittagongit.com/images/no-profile-picture-icon/no-profile-picture-icon-15.jpg',
    RolesArray  : [
         { Id : 1 , Role : GlobalVariable.LanguageResourse.ManageUser},
         { Id : 2 , Role : GlobalVariable.LanguageResourse.ManageVendor},
         { Id : 3 , Role : GlobalVariable.LanguageResourse.ManageVendorBooking},
         { Id : 4 , Role : GlobalVariable.LanguageResourse.ManageContent},
         { Id : 5 , Role : GlobalVariable.LanguageResourse.DashBoard}
    ]
});
