import JoyButton, { ButtonProps } from '@mui/joy/Button';

const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <JoyButton
      // variant="outlined"
      // sx={{
      //   color: '#FFF',
      //   borderColor: '#FFF',
      //   backgroundColor: 'inherit',
      
      //   '&:hover': {
      //     color: (theme) => theme.palette.text.primary,
      //     backgroundColor: '#FFF',
      //   },
      //   '&:active': {
      //     transform: 'scale(0.98)',
      //   }
      // }}
      {...props}
    >
      {children}
    </JoyButton>
  );
};

export default Button;
