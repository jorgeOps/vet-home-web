import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'VetHome - Cuidado Veterinario a Domicilio'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0F766E, #115E59)', // Darker turquoise gradient
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    borderRadius: '50%',
                    width: '200px',
                    height: '200px',
                    marginBottom: '40px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ fontSize: 120 }}>🐶</div>
                </div>
                <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: '10px' }}>VetHome</div>
                <div style={{ fontSize: 32, opacity: 0.9 }}>Cuidado de Confianza, Como en Casa</div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
