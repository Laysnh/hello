import AssessmentRounded from '@mui/icons-material/AssessmentRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import FolderCopyRounded from '@mui/icons-material/FolderCopyRounded';
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import Inventory2Rounded from '@mui/icons-material/Inventory2Rounded';
import NotificationsActiveRounded from '@mui/icons-material/NotificationsActiveRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import type { SvgIconComponent } from '@mui/icons-material';
import { routePaths } from '../routes/routePaths';

export interface NavigationItem {
  label: string;
  path: string;
  icon: SvgIconComponent;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Tableau de bord', path: routePaths.dashboard, icon: DashboardRounded },
  { label: 'Réunions Staff', path: routePaths.staffMeetings, icon: CalendarMonthRounded },
  { label: 'Staff élargie', path: routePaths.expandedStaffMeetings, icon: GroupsRounded },
  { label: 'PAI Antsirabe', path: routePaths.paiAntsirabe, icon: PlaceRounded },
  { label: 'Personnels', path: routePaths.personnel, icon: GroupsRounded },
  { label: 'SNERI', path: routePaths.sneri, icon: PublicRounded },
  { label: 'Early Warning', path: routePaths.earlyWarning, icon: NotificationsActiveRounded },
  { label: 'Projets', path: routePaths.projects, icon: FolderCopyRounded },
  { label: 'Stock', path: routePaths.stock, icon: Inventory2Rounded },
  { label: 'Rapports', path: routePaths.reports, icon: AssessmentRounded },
];

export const quickLinks = navigationItems.slice(1, 5);
