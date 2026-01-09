import { Outlet, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  LOGIN_KOJI,
  LOGIN_KOJI_REDIRECT,
  SERVICE_KOJI,
  TypeCommon,
} from '../../constants/common.constants';
import { useEffect, useState } from 'react';
import './index.css';
import { FiChevronLeft, FiChevronRight, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

import { ROUTERS } from '../../constants/common.constants';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import logo from '../../assets/logo.png';
import PersonIcon from '@mui/icons-material/Person';

export default function MainLayout() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  const userInfo = JSON.parse(localStorage.getItem('user_info') || '{}');
  const [isExpired, setIsExpired] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(JSON.parse(localStorage.getItem('sidebarOpen') || 'false'));
  const [dropdown, setDropdown] = useState(null);
  const handleToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    {
      name: 'product',
      label: open ? '移管商品登録' : '移管商品<br />登録',
      icon: <StoreIcon />,
      to: ROUTERS.PRODUCT,
    },
    {
      name: 'material',
      label: open ? '原材料登録' : '原材料<br />登録',
      icon: <InventoryIcon />,
      to: ROUTERS.MATERIAL,
    },
    // {
    //   name: 'transfer',
    //   label: '移管金額確認',
    //   icon: <PublishedWithChangesIcon />,
    //   to: ROUTERS.TRANSFER,
    // },
    { name: 'amount', label: '移管金額', icon: <AttachMoneyIcon />, to: ROUTERS.AMOUNT },
  ];
  const handleAccountClick = (event: TypeCommon) => setDropdown(event.currentTarget);

  const toggleSidebar = () => {
    const newState = !open;
    setOpen(newState);
    localStorage.setItem('sidebarOpen', JSON.stringify(newState));
  };

  const checkForInactivity = () => {
    const expireTime: TypeCommon = localStorage.getItem('expire_time');
    if (expireTime < Date.now()) {
      setIsExpired(true);
    }
  };
  const updateExpireTime = () => {
    const expireTime: TypeCommon = Date.now() + 3600000;
    localStorage.setItem('expire_time', expireTime);
    if (!localStorage.getItem('user_info')) {
      if (sessionStorage.getItem('is_logout')) {
        window.location.href = LOGIN_KOJI;
      } else {
        window.location.href = LOGIN_KOJI_REDIRECT;
      }
    }
  };
  const saveExpireTime = () => {
    const expireTime: TypeCommon = localStorage.getItem('expire_time');
    localStorage.setItem('last_expire_time', expireTime);
  };

  // const logout = async (): Promise<void> => {
  //   try {
  //     window.location.assign('/login');
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     sessionStorage.setItem('is_logout', 'true');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (isExpired) {
      localStorage.clear();
      sessionStorage.clear();
    }
  }, [isExpired]);

  useEffect(() => {
    const lastExpireTime: TypeCommon = localStorage.getItem('last_expire_time');
    if (lastExpireTime) {
      if (lastExpireTime < Date.now()) {
        setIsExpired(true);
      } else {
        localStorage.removeItem('last_expire_time');
        const interval = setInterval(() => {
          checkForInactivity();
        }, 1000);
        return () => clearInterval(interval);
      }
    } else {
      const interval = setInterval(() => {
        checkForInactivity();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', updateExpireTime);
    window.addEventListener('keypress', updateExpireTime);
    window.addEventListener('scroll', updateExpireTime, true);
    window.addEventListener('mousemove', updateExpireTime);
    window.addEventListener('beforeunload', saveExpireTime);
    return () => {
      window.removeEventListener('click', updateExpireTime);
      window.removeEventListener('keypress', updateExpireTime);
      window.removeEventListener('scroll', updateExpireTime, true);
      window.removeEventListener('mousemove', updateExpireTime);
      window.removeEventListener('beforeunload', saveExpireTime);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: '#ffffff',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            paddingTop: '64px',
            width: open ? '260px' : '100px',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '2px 0 8px rgba(0, 0, 0, 0.08)',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          <IconButton
            onClick={toggleSidebar}
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              padding: '6px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'absolute',
              zIndex: 2,
              top: '84px',
              right: '-18px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'scale(1.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            {open ? <FiChevronLeft /> : <FiChevronRight />}
          </IconButton>

          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxHeight: '100vh',
              overflowY: 'auto',
              padding: '6px',
              gap: '8px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#e0e0e0 transparent',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#e0e0e0',
                borderRadius: '3px',
                '&:hover': {
                  background: '#bdbdbd',
                },
              },
            }}
          >
            {menuItems.map(({ name, label, icon, to }) => {
              const isActive = location.pathname === to;
              return (
                <ListItem key={name} disablePadding sx={{ width: '100%' }}>
                  <ListItemButton
                    component={Link}
                    to={to}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      justifyContent: open ? 'flex-start' : 'center',
                      width: '100%',
                      minWidth: '80px',
                      padding: '14px',
                      textDecoration: 'none',
                      color: isActive ? '#1976d2' : '#5f6368',
                      backgroundColor: isActive ? '#e3f2fd' : 'transparent',
                      backgroundImage: isActive
                        ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
                        : 'none',
                      borderRadius: '12px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: isActive
                        ? '1px solid rgba(25, 118, 210, 0.2)'
                        : '1px solid transparent',
                      boxShadow: isActive ? '0 2px 8px rgba(25, 118, 210, 0.15)' : 'none',
                      '&:hover': {
                        backgroundColor: isActive ? '#e3f2fd' : '#f5f5f5',
                        backgroundImage: isActive
                          ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
                          : 'none',
                        boxShadow: isActive
                          ? '0 4px 12px rgba(25, 118, 210, 0.2)'
                          : '0 2px 4px rgba(0, 0, 0, 0.08)',
                      },
                      '& .MuiSvgIcon-root': {
                        color: isActive ? '#1976d2' : '#5f6368',
                        fontSize: '24px',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '24px',
                      }}
                    >
                      {icon}
                      {!open && (
                        <Typography
                          fontSize={12}
                          fontWeight={isActive ? 700 : 500}
                          variant='caption'
                          sx={{
                            mt: 0.5,
                            textAlign: 'center',
                            lineHeight: 1.2,
                            color: isActive ? '#1976d2' : '#5f6368',
                          }}
                        >
                          <span dangerouslySetInnerHTML={{ __html: label }} />
                        </Typography>
                      )}
                    </Box>

                    {open && (
                      <Typography
                        component='span'
                        sx={{
                          fontSize: '15px',
                          fontWeight: isActive ? 600 : 500,
                          marginLeft: '12px',
                          transition: 'opacity 0.3s ease',
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          alignItems: 'center',
                          flexGrow: 1,
                          textAlign: 'left',
                          letterSpacing: '0.3px',
                        }}
                      >
                        <span dangerouslySetInnerHTML={{ __html: label }} />
                      </Typography>
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <>
          <IconButton
            onClick={handleToggle}
            sx={{
              position: 'fixed',
              top: 12,
              left: 12,
              zIndex: 1300,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              padding: '10px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <FiMenu color='white' size={24} />
          </IconButton>

          <Drawer
            anchor='left'
            open={mobileOpen}
            onClose={handleToggle}
            sx={{
              zIndex: 1400,
              '& .MuiDrawer-paper': {
                width: '75vw',
                maxWidth: '320px',
                boxShadow: '4px 0 16px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                position: 'relative',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px 16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                }}
              >
                <img src={logo} alt='logo' style={{ width: '40%', objectFit: 'contain' }} />
              </Box>
              <List sx={{ padding: '16px 12px', gap: '8px' }}>
                {menuItems.map(({ name, label, icon, to }) => {
                  const isActive = location.pathname === to;
                  return (
                    <ListItem key={name} disablePadding sx={{ width: '100%', marginBottom: '8px' }}>
                      <ListItemButton
                        component={Link}
                        to={to}
                        onClick={handleToggle}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          justifyContent: 'flex-start',
                          width: '100%',
                          padding: '14px 16px',
                          color: isActive ? '#1976d2' : '#5f6368',
                          backgroundColor: isActive ? '#e3f2fd' : 'transparent',
                          backgroundImage: isActive
                            ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
                            : 'none',
                          borderRadius: '12px',
                          border: isActive
                            ? '1px solid rgba(25, 118, 210, 0.2)'
                            : '1px solid transparent',
                          boxShadow: isActive ? '0 2px 8px rgba(25, 118, 210, 0.15)' : 'none',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            backgroundColor: isActive ? '#e3f2fd' : '#f5f5f5',
                            backgroundImage: isActive
                              ? 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
                              : 'none',
                            boxShadow: isActive
                              ? '0 4px 12px rgba(25, 118, 210, 0.2)'
                              : '0 2px 4px rgba(0, 0, 0, 0.08)',
                          },
                          '& .MuiSvgIcon-root': {
                            color: isActive ? '#1976d2' : '#5f6368',
                            fontSize: '24px',
                          },
                        }}
                      >
                        {icon}
                        <Typography
                          component='span'
                          sx={{
                            fontSize: '16px',
                            fontWeight: isActive ? 600 : 500,
                            letterSpacing: '0.3px',
                          }}
                        >
                          <span dangerouslySetInnerHTML={{ __html: label }} />
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Drawer>
        </>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* Header */}
        <AppBar
          position='fixed'
          sx={{
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1200,
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: { xs: 2, sm: 3 },
              minHeight: '64px !important',
              height: '64px',
            }}
          >
            <Box display='flex' alignItems='center' gap={1.5}>
              {!isMobile && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '55px',
                    height: '55px',
                    borderRadius: '8px',
                    padding: '8px',
                  }}
                >
                  <img
                    src={logo}
                    alt='logo'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              )}

              <Typography
                variant='h6'
                sx={{
                  marginLeft: isMobile ? 5 : 0,
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: '#ffffff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                }}
              >
                店内移管金額計算
              </Typography>
            </Box>
            {!isMobile && (
              <Box display='flex' alignItems='center' gap={2}>
                <Typography
                  onClick={() => (window.location.href = SERVICE_KOJI)}
                  sx={{
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  サービス一覧に戻る
                </Typography>

                <Box
                  display='flex'
                  alignItems='center'
                  sx={{
                    cursor: 'pointer',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                  // onClick={() => setOpenConfirmModal(true)}
                >
                  <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#ffffff' }}>
                    ユーザー切替
                  </Typography>
                </Box>

                <Box
                  display='flex'
                  alignItems='center'
                  sx={{
                    cursor: 'pointer',
                    gap: 1.5,
                    padding: '4px 12px 4px 4px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                  onClick={handleAccountClick}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    <PersonIcon sx={{ fontSize: '20px', color: '#ffffff' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#ffffff',
                    }}
                  >
                    {userInfo?.username || 'アカウント'}
                  </Typography>
                </Box>
                {/* <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={handleClose}>
                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      sessionStorage.clear();
                      navigate('/login');
                    }}
                  >
                    ログアウト
                  </MenuItem>
                </Menu> */}
              </Box>
            )}

            {isMobile && (
              <>
                <Box
                  display='flex'
                  alignItems='center'
                  onClick={handleAccountClick}
                  sx={{
                    cursor: 'pointer',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: '20px', color: '#ffffff' }} />
                  </Box>
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 500,
                      marginLeft: '8px',
                      marginRight: '4px',
                    }}
                  >
                    {userInfo?.username || 'アカウント'}
                  </Typography>
                  <MdOutlineArrowDropDown size={20} color='#ffffff' />
                </Box>

                <Menu
                  anchorEl={dropdown}
                  open={Boolean(dropdown)}
                  onClose={() => setDropdown(null)}
                >
                  <MenuItem onClick={() => (window.location.href = SERVICE_KOJI)}>
                    サービス一覧に戻る
                  </MenuItem>
                  {/* <MenuItem onClick={() => setOpenConfirmModal(true)}>ユーザー切替</MenuItem> */}
                </Menu>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flex: 1,
            marginTop: '64px',
            backgroundColor: '#f8f9fa',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
