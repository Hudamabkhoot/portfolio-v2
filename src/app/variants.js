export const fadeIn = (direction = 'up', delay) => {
    const xMovement = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;
    const yMovement = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;

    return {
        hidden: {
            x: xMovement,
            y: yMovement,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75], // Ease in-out cubic
            }
        }
    }
}
