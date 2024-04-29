// GooglePay.jsx
import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const GooglePay = ({ totalToPay, onPaymentSuccess }) => {
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '01234567890123456789',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: totalToPay.toFixed(2),
          currencyCode: 'USD',
          countryCode: 'US',
        },
      }}
      onLoadPaymentData={() => {
        // Simulando una respuesta exitosa del pago
        onPaymentSuccess();
      }}
    />
  );
};

export default GooglePay;
