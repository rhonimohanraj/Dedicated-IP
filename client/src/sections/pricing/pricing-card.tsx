import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { varAlpha, stylesMode } from 'src/theme/styles';
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from 'src/assets/icons';

import { Label } from 'src/components/label';
import {FlagIcon, Iconify} from 'src/components/iconify';
import {Product} from "../../hooks/use-product";

// ----------------------------------------------------------------------

type Props = CardProps & {
  index: number;
  card: Product;
  starter: boolean;
};

export function PricingCard({ card, starter, sx, ...other }: Props) {
  const { country, country_code, city, price, title, features } = card;

  const renderIcon = (
    <Stack direction="row" alignItems="center" justifyContent="space-between">


      {starter && <PlanStarterIcon sx={{ width: 64 }} />}

      {!starter && <PlanPremiumIcon sx={{ width: 64 }} />}

      <FlagIcon code={country_code} />
    </Stack>
  );

  const renderSubscription = (
    <Stack spacing={1}>
      <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
        {title}
      </Typography>
      <Typography variant="subtitle2">{country} {city}</Typography>
    </Stack>
  );

  const renderPrice =
    <Stack direction="row">
      <Typography variant="h4">$</Typography>

      <Typography variant="h2">{price}</Typography>

      <Typography
        component="span"
        sx={{
          alignSelf: 'center',
          color: 'text.disabled',
          ml: 1,
          typography: 'body2',
        }}
      >
        / mo
      </Typography>
    </Stack>;

  const renderList = (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box component="span" sx={{ typography: 'overline' }}>
          Features
        </Box>
      </Stack>
      {features.map((item) => (
        <Stack
          key={item}
          spacing={1}
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2' }}
        >
          <Iconify icon="eva:checkmark-fill" width={16} sx={{ mr: 1 }} />
          {item}
        </Stack>
      ))}
    </Stack>
  );

  return (
    <Stack
      spacing={5}
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.default',
        boxShadow: (theme) => ({ xs: theme.customShadows.card, md: 'none' }),
          borderBottomRightRadius: { md: 0 },
        ...({
          [stylesMode.dark]: {
            boxShadow: (theme) => ({
              xs: theme.customShadows.card,
              md: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
            }),
          },
        }),
        ...sx,
      }}
      {...other}
    >
      {renderIcon}

      {renderSubscription}

      {renderPrice}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderList}

      <Button
        fullWidth
        size="large"
        variant="contained"
        color='inherit'
      >
        Setup in 2 minutes
      </Button>
    </Stack>
  );
}
