import { createMuiTheme } from '@material-ui/core/styles'
import {
    PRIMARY_MAIN_COLOR,
    PRIMARY_LIGHT_COLOR,
    PRIMARY_DARK_COLOR,
    SECONDARY_MAIN_COLOR,
    SECONDARY_LIGHT_COLOR,
    SECONDARY_DARK_COLOR,
    WHITE_COLOR,
    ERROR_COLOR,
    DARK_COLOR
} from '../constants/color'

export default createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY_MAIN_COLOR, // dark grey
            light: PRIMARY_LIGHT_COLOR,
            dark: DARK_COLOR,
            contrastText: WHITE_COLOR
        },
        secondary: {
            main: SECONDARY_MAIN_COLOR,
            light: SECONDARY_LIGHT_COLOR,
            dark: SECONDARY_DARK_COLOR,
            contrastText: WHITE_COLOR
        },
        text: {
            primary: DARK_COLOR
        }
    },
    // typography: {
    //     fontFamily: 'SVNGilroyRegular',
    //     root: {
    //         fontFamily: 'SVNGilroyRegular',
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //         whiteSpace: 'nowrap',
    //         color: DARK_COLOR,
    //     },
    //     body2: {
    //         // color: PRIMARY_MAIN_COLOR, // light-grey
    //         fontFamily: 'SVNGilroyMedium',
    //         fontWeight: 500,
    //         fontStyle: 'normal',
    //     },
    //     body1: {
    //         fontFamily: 'SVNGilroyRegular',
    //         fontSize: 14,
    //         fontWeight: 300,
    //         fontStyle: 'normal',
    //     },
    //     subtitle1: {
    //         fontFamily: 'SVNGilroyBold',
    //         fontSize: 28,
    //         marginTop: 35,
    //         color: DARK_COLOR,
    //     },
    //     h4: {
    //         fontSize: 22,
    //         fontFamily: 'SVNGilroyBold',
    //     },
    //     h5: {
    //         fontFamily: 'SVNGilroyBold',
    //         fontSize: 20,
    //         color: '#2E3131',
    //     },
    //     h6: {
    //         lineHeight: 1.2,
    //         letterSpacing: -0.5,
    //     },
    //     subtitle2: {
    //         fontFamily: 'SVNGilroyBold',
    //         fontSize: 16,
    //     },
    //     caption: {
    //         fontSize: 12,
    //     },
    //     overline: {
    //         fontSize: 12,
    //         fontFamily: 'Roboto Mono',
    //         textTransform: 'unset',
    //         lineHeight: 0,
    //     },
    // },
    typography: {
        fontFamily:
            '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        root: {
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            overflow: 'hidden',
            fontWeight: 300,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: DARK_COLOR
        },
        body2: {
            // color: PRIMARY_MAIN_COLOR, // light-grey
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        body1: {
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 14,
            fontWeight: 300,
            fontStyle: 'normal'
        },
        subtitle1: {
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, Bold',
            fontSize: 28,
            marginTop: 35,
            color: DARK_COLOR
        },
        h4: {
            fontSize: 22,
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, Bold'
        },
        h5: {
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, Bold',
            fontSize: 20,
            color: '#2E3131'
        },
        h6: {
            lineHeight: 1.2,
            letterSpacing: -0.5,
            fontSize: 18
        },
        subtitle2: {
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, Bold',
            fontSize: 16
        },
        caption: {
            fontSize: 12,
            fontWeight: 300
        },
        overline: {
            fontSize: 12,
            fontFamily:
                '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, Bold',
            textTransform: 'unset',
            lineHeight: 0,
            fontWeight: 300
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': {
                    fontFamily: 'SVNGilroyRegular',
                    src: `url("../statics/fonts/SVN-Gilroy Regular.ttf")`
                },
                '@font-face': {
                    fontFamily: 'SVNGilroyMedium',
                    src: `url("../statics/fonts/SVN-Gilroy Medium.otf") format('otf')`
                },
                '@font-face': {
                    fontFamily: 'SVNGilroyBold',
                    src: `url("../statics/fonts/SVN-Gilroy SemiBold.otf")`
                }
                // '&::-webkit-scrollbar': {
                //     border: `1px solid ${SECONDARY_LIGHT_COLOR}`,
                //     borderRadius: 10,
                //     background: PRIMARY_LIGHT_COLOR,
                //     height: 6,
                //     width: 6,
                // },
                // '&::-webkit-scrollbar-thumb': {
                //     backgroundColor: SECONDARY_LIGHT_COLOR,
                //     borderRadius: 10,
                // },
            }
        },

        MuiButton: {
            root: {
                textTransform: 'capitalize',
                borderRadius: 4,
                boxShadow: 'none',
                height: 32,
                padding: '5px 16px',
                fontWeight: 400
            },
            containedPrimary: {
                'boxShadow': 'none',
                'color': WHITE_COLOR,
                'border': `solid 1px ${PRIMARY_MAIN_COLOR}`,
                'backgroundColor': PRIMARY_MAIN_COLOR,
                '&:hover': {
                    color: PRIMARY_MAIN_COLOR,
                    backgroundColor: WHITE_COLOR,
                    border: `solid 1px ${PRIMARY_MAIN_COLOR}`,
                    boxShadow: 'none'
                }
            },
            label: {
                marginTop: -2
            }
        },
        MuiAvatar: {
            root: {
                margin: '0 5px'
            }
        },
        MuiAppBar: {
            root: {
                padding: 0,
                borderRadius: 0
            }
        },
        MuiExpansionPanel: {
            root: {
                '&::before': {
                    height: 0
                },
                'padding': '0 !important'
            }
        },
        MuiExpansionPanelSummary: {
            expandIcon: {
                'backgroundColor': PRIMARY_MAIN_COLOR,
                'padding': 2,
                'marginRight': 10,
                'marginLeft': -8,
                'color': 'white',
                '&:hover': {
                    backgroundColor: SECONDARY_MAIN_COLOR
                }
            },
            root: {
                // 'color': SECONDARY_MAIN_COLOR,
                '&:hover': {
                    'color': PRIMARY_MAIN_COLOR,
                    '&.MuiExpansionPanelSummary': {
                        expandIcon: {
                            backgroundColor: PRIMARY_MAIN_COLOR
                        }
                    }
                }
            }
        },
        MuiPaper: {
            root: {
                // boxShadow: 'none !important',
                // borderRadius: '8px !important',
                // padding: '18px !important',
                boxShadow: 'none',
                borderRadius: '8px',
                padding: '18px'
            },
            rounded: {
                borderRadius: '8px'
            },
            elevation1: {
                boxShadow: 'none'
            },
            elevation4: {
                boxShadow: 'none'
            },
            elevation8: {
                boxShadow: 'none'
            }
        },

        MuiDrawer: {
            paper: {
                padding: 0,
                borderRadius: 0
            }
        },
        MuiMenu: {
            paper: {
                padding: '0 !important',
                marginTop: 80,
                backgroundColor: WHITE_COLOR,
                borderRadius: 8,
                border: `1px solid ${SECONDARY_LIGHT_COLOR}`,
                color: PRIMARY_MAIN_COLOR
            }
        },
        MuiListItem: {
            root: {
                '&.Mui-selected': {
                    'backgroundColor': SECONDARY_LIGHT_COLOR,
                    '&:hover': {
                        backgroundColor: SECONDARY_LIGHT_COLOR
                    }
                }
            },
            button: {
                '&:hover': {
                    backgroundColor: SECONDARY_LIGHT_COLOR
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                'borderRadius': 0,
                '-webkit-transition': '0.5s',
                'transition': '0.5s',
                '&:hover': {
                    'borderColor': SECONDARY_MAIN_COLOR,
                    '& fieldset': {
                        borderColor: `${SECONDARY_MAIN_COLOR} !important`
                    }
                }
            },
            notchedOutline: {
                '-webkit-transition': '0.5s',
                'transition': '0.5s',
                'borderColor': `${SECONDARY_LIGHT_COLOR} !important`
            }
        },
        MuiTableCell: {
            head: {
                color: WHITE_COLOR,
                backgroundColor: PRIMARY_MAIN_COLOR
            }
        },
        MuiChip: {
            root: {
                // borderRadius: 4,
            },
            sizeSmall: {
                height: 16
            },
            labelSmall: {
                fontSize: 10,
                fontWeight: 400
            },
            deleteIconSmall: {
                width: 14,
                height: 14,
                marginRight: 2
            },
            outlined: {
                '& .MuiChip-deleteIconSmall': {
                    marginRight: 0
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'none'
                }
            }
        },
        MuiListItemText: {
            primary: {
                fontSize: '12px !important',
                fontWeight: '300 !important'
            }
        }
    }
})
