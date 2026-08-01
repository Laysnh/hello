import CloseRounded from '@mui/icons-material/CloseRounded';
import { Box, Divider, Drawer, FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppBreadcrumbs } from '../components/navigation/AppBreadcrumbs';
import { AppSidebar, SIDEBAR_WIDTH } from '../components/navigation/AppSidebar';
import { AppTopbar } from '../components/navigation/AppTopbar';
import { QuickLinks } from '../components/navigation/QuickLinks';

/** Persistent government workspace shared by every authenticated module. */
export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', bgcolor: 'background.default' }}>
      <AppSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
      <Box sx={{ minWidth: 0, width: { xs: '100%', md: `calc(100% - ${SIDEBAR_WIDTH}px)` } }}>
        <AppTopbar onMenuOpen={() => setMobileOpen(true)} onSettingsOpen={() => setSettingsOpen(true)} />
        <Box component="main" sx={{ px: { xs: 2, sm: 3, lg: 4 }, py: { xs: 2.5, md: 3.5 }, maxWidth: 1680, mx: 'auto' }}>
          <AppBreadcrumbs />
          <QuickLinks />
          <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}><Outlet /></motion.div></AnimatePresence>
        </Box>
      </Box>
      <Drawer anchor="right" open={settingsOpen} onClose={() => setSettingsOpen(false)} slotProps={{ paper: { sx: { width: { xs: '100%', sm: 380 }, p: 3 } } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between"><Box><Typography variant="h3">Paramètres</Typography><Typography variant="body2" color="text.secondary">Préférences de l’interface</Typography></Box><IconButton aria-label="Fermer les paramètres" onClick={() => setSettingsOpen(false)}><CloseRounded /></IconButton></Stack>
        <Divider sx={{ my: 3 }} />
        <Stack spacing={1}><FormControlLabel control={<Switch defaultChecked />} label="Notifications dans l’application" /><FormControlLabel control={<Switch />} label="Mode de contraste renforcé" /><FormControlLabel control={<Switch defaultChecked />} label="Animations de l’interface" /></Stack>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 3 }}>Ces préférences sont présentées à titre de démonstration.</Typography>
      </Drawer>
    </Box>
  );
}
