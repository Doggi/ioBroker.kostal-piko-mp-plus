export interface State {
    xpathValue: string;
    id: string;
    name: string;
    xpathUnit?: string;
    type?: CommonType;
    read?: boolean;
    write?: boolean;
    role?: string;
}
