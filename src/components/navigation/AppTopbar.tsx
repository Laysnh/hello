import LogoutRounded from '@mui/icons-material/LogoutRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import NotificationsNoneRounded from '@mui/icons-material/NotificationsNoneRounded';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import { AppBar, Avatar, Badge, Box, Divider, IconButton, InputAdornment, ListItemIcon, Menu, MenuItem, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import { useState, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../../routes/routePaths';

interface AppTopbarProps { onMenuOpen: () => void; onSettingsOpen: () => void; }

export function AppTopbar({ onMenuOpen, onSettingsOpen }: AppTopbarProps) {
  const navigate = useNavigate();
  const [notificationAnchor, setNotificationAnchor] = useState<HTMLElement | null>(null);
  const [profileAnchor, setProfileAnchor] = useState<HTMLElement | null>(null);
  const openMenu = (setter: (value: HTMLElement | null) => void) => (event: MouseEvent<HTMLElement>) => setter(event.currentTarget);

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'rgba(255,255,255,.94)', backdropFilter: 'blur(12px)' }}>
      <Toolbar sx={{ minHeight: { xs: 68, md: 80 }, gap: { xs: 1, sm: 2 } }}>
        <IconButton aria-label="Ouvrir la navigation" onClick={onMenuOpen} sx={{ display: { md: 'none' } }}><MenuRounded /></IconButton>
        <TextField aria-label="Recherche globale" placeholder="Rechercher un module, un rapport…" size="small" sx={{ maxWidth: 460, display: { xs: 'none', sm: 'block' }, '& .MuiOutlinedInput-root': { minHeight: 44, bgcolor: 'background.default' } }} slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchRounded color="action" /></InputAdornment> } }} />
        <Box flex={1} />
        <Tooltip title="Rechercher"><IconButton aria-label="Recherche globale" sx={{ display: { sm: 'none' } }}><SearchRounded /></IconButton></Tooltip>
        <Tooltip title="Notifications"><IconButton aria-label="Notifications, 3 non lues" onClick={openMenu(setNotificationAnchor)}><Badge badgeContent={3} color="error"><NotificationsNoneRounded /></Badge></IconButton></Tooltip>
        <Tooltip title="Paramètres"><IconButton aria-label="Paramètres" onClick={onSettingsOpen}><SettingsOutlined /></IconButton></Tooltip>
        <Divider orientation="vertical" flexItem sx={{ my: 2, display: { xs: 'none', sm: 'block' } }} />
        <Stack component="button" onClick={openMenu(setProfileAnchor)} direction="row" alignItems="center" spacing={1.25} sx={{ border: 0, bgcolor: 'transparent', cursor: 'pointer', p: 0.5, borderRadius: 2, color: 'text.primary', '&:focus-visible': { outline: '3px solid', outlineColor: 'secondary.main' } }}>
          <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main', fontSize: 15, fontWeight: 700 }}>RA</Avatar>
          <Box textAlign="left" sx={{ display: { xs: 'none', lg: 'block' } }}><Typography variant="body2" fontWeight={700}>Rakoto Andry</Typography><Typography variant="caption" color="text.secondary">Administrateur</Typography></Box>
        </Stack>
      </Toolbar>
      <Menu anchorEl={notificationAnchor} open={Boolean(notificationAnchor)} onClose={() => setNotificationAnchor(null)} slotProps={{ paper: { sx: { width: 340, maxWidth: 'calc(100vw - 24px)', mt: 1 } } }}>
        <Typography fontWeight={700} sx={{ px: 2, py: 1 }}>Notifications</Typography><Divider />
        <MenuItem sx={{ whiteSpace: 'normal', py: 1.5 }}><Box><Typography variant="body2" fontWeight={600}>Alerte météo actualisée</Typography><Typography variant="caption" color="text.secondary">Il y a 12 minutes · Donnée fictive</Typography></Box></MenuItem>
        <MenuItem sx={{ whiteSpace: 'normal', py: 1.5 }}><Box><Typography variant="body2" fontWeight={600}>Réunion Staff demain à 09h00</Typography><Typography variant="caption" color="text.secondary">Il y a 1 heure · Donnée fictive</Typography></Box></MenuItem>
      </Menu>
      <Menu anchorEl={profileAnchor} open={Boolean(profileAnchor)} onClose={() => setProfileAnchor(null)} slotProps={{ paper: { sx: { minWidth: 220, mt: 1 } } }}>
        <MenuItem><ListItemIcon><PersonOutlineRounded fontSize="small" /></ListItemIcon>Mon profil</MenuItem>
        <MenuItem onClick={() => { setProfileAnchor(null); onSettingsOpen(); }}><ListItemIcon><SettingsOutlined fontSize="small" /></ListItemIcon>Paramètres</MenuItem><Divider />
        <MenuItem onClick={() => navigate(routePaths.login)} sx={{ color: 'error.main' }}><ListItemIcon><LogoutRounded color="error" fontSize="small" /></ListItemIcon>Se déconnecter</MenuItem>
      </Menu>
    </AppBar>
  );
}
