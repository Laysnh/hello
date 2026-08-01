import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';

export const SIDEBAR_WIDTH = 276;

interface AppSidebarProps { mobileOpen: boolean; onMobileClose: () => void; }

export function AppSidebar({ mobileOpen, onMobileClose }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const content = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#004B89', color: 'white' }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minHeight: 80, px: 2.5 }}>
        <Box sx={{ width: 46, height: 46, borderRadius: 2, bgcolor: 'white', color: 'primary.main', display: 'grid', placeItems: 'center' }}><AccountBalanceRounded /></Box>
        <Box flex={1}><Typography fontFamily="Poppins" fontWeight={700}>BNGRC</Typography><Typography variant="caption" sx={{ opacity: 0.72 }}>Plateforme numérique</Typography></Box>
        <IconButton aria-label="Fermer le menu" onClick={onMobileClose} sx={{ color: 'white', display: { md: 'none' } }}><CloseRounded /></IconButton>
      </Stack>
      <Divider sx={{ borderColor: 'rgba(255,255,255,.12)' }} />
      <Typography variant="overline" sx={{ px: 3, pt: 3, pb: 1, opacity: 0.6, letterSpacing: 1.4 }}>Navigation</Typography>
      <List component="nav" aria-label="Modules BNGRC" sx={{ px: 1.5, py: 0, overflowY: 'auto' }}>
        {navigationItems.map((item, index) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;
          return <motion.div key={item.path} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.025 }}><ListItemButton selected={active} onClick={() => { navigate(item.path); onMobileClose(); }} sx={{ minHeight: 48, mb: 0.5, borderRadius: 2, color: 'rgba(255,255,255,.82)', '&.Mui-selected': { bgcolor: 'white', color: 'primary.dark', '&:hover': { bgcolor: 'white' } }, '&:hover': { bgcolor: 'rgba(255,255,255,.09)' } }}><ListItemIcon sx={{ minWidth: 42, color: 'inherit' }}><Icon fontSize="small" /></ListItemIcon><ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 700 : 500 }} /></ListItemButton></motion.div>;
        })}
      </List>
      <Box sx={{ mt: 'auto', p: 2.5 }}><Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(255,255,255,.08)' }}><Typography variant="caption" fontWeight={700}>ENVIRONNEMENT SÉCURISÉ</Typography><Typography variant="caption" display="block" sx={{ opacity: 0.65, mt: 0.5 }}>Démonstration · Données fictives</Typography></Box></Box>
    </Box>
  );
  return <><Drawer variant="permanent" open sx={{ width: SIDEBAR_WIDTH, flexShrink: 0, display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, border: 0 } }}>{content}</Drawer><Drawer variant="temporary" open={mobileOpen} onClose={onMobileClose} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, border: 0 } }}>{content}</Drawer></>;
}
