import {useSettings} from '@common/core/settings/use-settings';
import {useAuth} from '@common/auth/use-auth';

export function useShouldShowComments() {
  const {player} = useSettings();
  const {hasPermission} = useAuth();
  return player?.track_comments && hasPermission('comments.view');
}
