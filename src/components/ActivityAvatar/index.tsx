import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { ActivityData } from '@/types';
import { getAvatarUrl } from '@/utils/avatars';
import getActivityIcon from '@/utils/getActivityIcon';
import getActivityColor from '@/utils/getActivityColor';

interface Props {
  data: ActivityData;
}

export default function ActivityAvatar({
  data: { name, avatar, type },
}: Props): JSX.Element {
  return (
    <Avatar name={name} src={getAvatarUrl(avatar)} cursor="pointer">
      {!!type && (
        <AvatarBadge
          bg="main.300"
          as={getActivityIcon(type)}
          sx={{ borderColor: 'main.300', borderWidth: 5 }}
          boxSize={6}
          color={getActivityColor(type)}
        />
      )}
    </Avatar>
  );
}
