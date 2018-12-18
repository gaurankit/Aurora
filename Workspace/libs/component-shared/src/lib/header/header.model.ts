export interface HeaderData {
    brand: {
      name: string,
      icon: string,
      imageUrl: string,
      url: string 
    }
    userInfo: {
      firstName:String,
      LastName: String,
      availablePoints: number,
      icon: String

    }
}


export const HeaderInfo : HeaderData = 
 {
  brand: {
    name: "ORXe 3.0",
    icon: "menu",
    imageUrl: "",
    url: "/" 
  },
  userInfo: {
    firstName:"John",
    LastName: "Simth",
    availablePoints: 20000,
    icon : "account_circle"
  }
 };
