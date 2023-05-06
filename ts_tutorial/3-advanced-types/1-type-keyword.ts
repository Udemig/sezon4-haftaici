/**
 *
 */

import { RoleKeyType } from "./2-union-type";

let last_name: string = "turgay";

type UdemigClassType = {
  students: string[];
  class_name: string;
  season: number;
  department: string;
  instructors: string[];
  start_at: Date;
};

const season4_frontend: UdemigClassType = {
  class_name: "sezon 4 haftaiçi frontend sınıfı",
  department: "frontend",
  instructors: ["emir", "emre", "mehmet"],
  students: ["ahmet", "ayşe", "fadime", "turgay"],
  season: 4,
  start_at: new Date(),
};

//////////////////////////////////////////////
/**
 * Örnek 1: Şu linkteki json objesine karşılık gelen type ifadesini tanımlayalım:
 * https://raw.githubusercontent.com/emirbugra/react-api-tutorial/main/docs/api/json/app_data.json
 *
 */

type PermissionKeyType =
  | "user_management"
  | "permission_management"
  | "role_management"
  | "system_settings_management"
  | "category_management"
  | "service_management"
  | "newsletter_management";

type PermissionType = {
  permission_key: PermissionKeyType;
  admin: 0 | 1;
  read: 0 | 1;
  create: 0 | 1;
  update: 0 | 1;
  delete: 0 | 1;
};

type AppDataType = {
  data: {
    user: {
      id: number;
      role_id: number;
      role_key: RoleKeyType;
      lang_code: string;
      firstname: string;
      lastname: string;
      email: string;
      facebook_id: string | null;
      google_id: string | null;
      status: "active" | "passive";
      created_at: string;
      updated_at: string;
      permissions: PermissionType[];
    };
    menu: [];
    systemPermissions: string[];
    userJobSearchPreferences: {
      zipCode: string;
      categoryId: string;
    };
  };
  status: "success" | "error";
};

let api_result: AppDataType = {
  data: {
    menu: [],
    systemPermissions: [],
    userJobSearchPreferences: {
      categoryId: "test",
      zipCode: "75002",
    },
    user: {
      id: 1,
      role_id: 10,
      role_key: "admin",
      lang_code: "en",

      firstname: "test",
      lastname: "test",
      email: "test@test.com",
      facebook_id: null,
      google_id: null,
      status: "active",
      created_at: "2021-09-11 17:54:46",
      updated_at: "2021-09-11 17:54:46",
      permissions: [
        {
          permission_key: "newsletter_management",
          admin: 1,
          create: 0,
          delete: 1,
          read: 0,
          update: 0,
        },
        {
          permission_key: "category_management",
          admin: 0,
          create: 1,
          read: 1,
          delete: 0,
          update: 1,
        },
      ],
    },
  },
  status: "success",
};

console.log(">> Api Result:", api_result);

/**
 * Mevcut type'ları farklı bir isimle kullanmak istiyorsak eski type'ı yeni type'a eşitleyerek bu işlemi yapabiliriz.
 */
type MyString = string;

// örneğin iki farklı değişken ve iki farklı type belirtelim. Bu iki değişken birbirine atanabilir. Çünkü
// temelde ikisi de aynı türdedir yani string'dir.
const example_my_string: MyString = "example my str";
const example_str: string = example_my_string;
