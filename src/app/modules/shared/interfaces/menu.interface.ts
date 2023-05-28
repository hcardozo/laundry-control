export interface Menu {
    id: string;
    name: string;
    redirectTo?: string;
    icon?: string;
    menus?: Menu[];
    isCollapsed?: Boolean;
}