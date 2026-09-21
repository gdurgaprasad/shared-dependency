export enum ROUTES {
    PUBLIC = '/public',
    LOGIN = '/login',
    REMINDER = '/reminder',
    SETTINGS = '/settings',
    DASHBOARD = '/dashboard'
}

export enum SETTINGS_TABS {
    PROFILE = 'Profile',
    TAGS = 'Tags'
}

export enum MESSAGES {
    LOGIN_SUCCESS = 'Login successful.',
    LOGIN_FAILED = 'Login failed',
    LOGOUT_SUCCESS = 'Logout successful.',
    LOGOUT_FAILED = 'Logout failed.',
    TAG_SAVE_SUCCESS = 'Tag saved successfully.',
    TAG_SAVE_FAILED = 'Failed to save tag'
}

export enum TOAST_TYPES {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info'
}