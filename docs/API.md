# API & Integration Specification — Project Atlas

## External Services
1. **Firebase Authentication**: Client and server-side session management.
2. **Cloud Firestore**: Data storage for inquiries, newsletter subscribers, and ecosystem metadata.
3. **Firebase Storage**: Asset hosting for portfolio screenshots and product media.

## Client API Drivers
All backend interactions are routed through handlers in `src/firebase/` and `src/services/`.
