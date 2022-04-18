export const customStyles = {
    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
        padding: '12px 24px',
        height: '51px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '150%',
        border: 'none',
        backgroundColor: state.isFocused ? '#F5F9FF;' : 'transparent',
        color: '#7C899C',
    }),
    Menu: () => ({
        borderRadius: '8px',
        width: '256px'
    }),
    control: () => ({
        borderRadius: '16px',
        border: '1px solid #DAE4F2',
        height: '59px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '150%',
        width: '256px',
        display: 'flex',
        paddingLeft: '20px',
        paddingRight: '12px',
    }),
    dropdownIndicator: () => ({
        border: 'none',
        paddingLeft: '10px',
        color: 'black',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    input: () => ({
        color: 'red',
    }),
};

export const getOptions = (categories: string[]) => {
   return [{label: 'All Products', value: 'all'} ,...categories.map( (cat:string) => ({label: cat, value:cat}))]

}