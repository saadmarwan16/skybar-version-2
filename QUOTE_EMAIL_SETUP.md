# Quote Request Email Configuration

## Environment Variables

Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_QUOTE_TEMPLATE_ID=your_quote_template_id
NEXT_PUBLIC_KEY=your_public_key
```

## EmailJS Template Setup

Create a new template in EmailJS with the following structure:

### Template Name
`Quote Request Template`

### Subject
`Quote Request from {{customer_name}} - {{total_products}} Products`

### Content (HTML)
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e40af;">New Quote Request</h2>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
    <p><strong>Name:</strong> {{customer_name}}</p>
    <p><strong>Email:</strong> {{customer_email}}</p>
    <p><strong>Phone:</strong> {{customer_phone}}</p>
    <p><strong>Company:</strong> {{customer_company}}</p>
  </div>

  <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Quote Summary</h3>
    <p><strong>Total Products:</strong> {{total_products}}</p>
    <p><strong>Total Items:</strong> {{total_items}}</p>
  </div>

  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Requested Items</h3>
    <pre style="white-space: pre-wrap; font-family: monospace; font-size: 14px; line-height: 1.6;">{{quote_items}}</pre>
  </div>

  <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #1e40af;">
    <p style="margin: 0; font-size: 14px; color: #6b7280;">
      Please respond to this quote request within 24 hours at: <strong>{{customer_email}}</strong>
    </p>
  </div>
</div>
```

### Template Variables
The template uses the following variables:
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{customer_phone}}` - Customer's phone number
- `{{customer_company}}` - Customer's company name
- `{{total_products}}` - Number of unique products in cart
- `{{total_items}}` - Total quantity of all items
- `{{quote_items}}` - Formatted list of all cart items with details

### Email Settings
- **To Email:** Use `{{to_email}}` or configure a fixed admin email
- **Reply To:** `{{customer_email}}`
- **From Name:** Skybar Dış Ticaret
- **From Email:** Your configured EmailJS email

## Testing

1. Add items to the cart
2. Click "Request Quote"
3. Fill in the email form (email is required, other fields optional)
4. Submit the form
5. Check the configured email inbox for the quote request

## Features

✅ Dialog with email form
✅ Optional fields for name, phone, and company
✅ Cart summary display
✅ Detailed product list in email
✅ Success/error toast notifications
✅ Form validation with Zod
✅ Loading states during submission
