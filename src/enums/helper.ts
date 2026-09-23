export enum ROUTES {
    PUBLIC = "/public",
    LOGIN = "/login",
    REMINDER = "/reminder",
    SETTINGS = "/settings",
    DASHBOARD = "/dashboard"
}
export enum SETTINGS_TABS {
    PROFILE = "Profile",
    TAGS = "Tags"
}
export enum MESSAGES {
    SAVE_LOGIN_FORM_FIELDS_FAILED = "Failed to save login form fields.",
    SAVE_LOGIN_FORM_FIELDS_SUCCESS = "Login form fields saved successfully.",
    FETCH_LOGIN_FORM_FIELDS_FAILED = "Failed to fetch login form fields.",
    FETCH_LOGIN_FORM_FIELDS_SUCCESS = "Login form fields fetched successfully.",
    SAVE_OR_FETCH_USER_FAILED = "Failed to save or fetch user.",
    INVALID_EMAIL_OR_PASSWORD = "Invalid email or password.",
    SAVE_OR_FETCH_USER_SUCCESS = "User saved or fetched successfully.",
    SAVE_TAG_FORM_FIELDS_SUCCESS = "Tag form fields saved successfully.",
    SAVE_TAG_FORM_FIELDS_FAILED = "Failed to save tag form fields.",
    FETCH_TAG_FORM_FIELDS_FAILED = "Failed to fetch tag form fields.",
    FETCH_TAG_FORM_FIELDS_SUCCESS = "Tag form fields fetched successfully.",
    FETCH_USER_TAGS_FAILED = "Failed to fetch user tags.",
    FETCH_USER_TAGS_SUCCESS = "User tags fetched successfully.",
    DELETE_USER_TAG_FAILED = "Failed to delete user tag.",
    DELETE_USER_TAG_SUCCESS = "User tag deleted successfully.",
    SAVE_USER_TAG_FAILED = "Failed to save user tag.",
    SAVE_USER_TAG_SUCCESS = "User tag saved successfully.",
    USER_TAG_ALREADY_EXISTS = "User tag already exists.",
    LOGIN_SUCCESS = "Login successful.",
    LOGIN_FAILED = "Login failed",
    LOGOUT_SUCCESS = "Logout successful.",
    LOGOUT_FAILED = "Logout failed.",
    TAG_SAVE_SUCCESS = "Tag saved successfully.",
    TAG_SAVE_FAILED = "Failed to save tag"
}
export enum TOAST_TYPES {
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}
