module.exports = {
    async afterCreate(data) {

        const { firstname, lastname, email, phone, total } = data.params.data;
        console.log('afterCreate', firstname, lastname, email, phone, total);
        try {
            await strapi.plugins['email'].services.email.send({
                to: email,
                from: 'centralcharmazores@gmail.com',
                subject: 'Central Charm Azores - Reservation',
                text: `Dear ${firstname} ${lastname},\n\nThank you for your reservation.\n\nWe will contact you soon.\n\nBest regards,\nCentral Charm Azores, phone: +351 91 46 99 791, total: ${total}€`,
                html: `<p>Dear ${firstname} ${lastname},</p><p>Thank you for your reservation.</p><p>We will contact you soon.</p><p>Best regards,</p><p>Central Charm Azores</p><p>phone: +351 91 46 99 791</p><p>total: ${total}€</p>`,
            });
        } catch (err) {
            console.log(err);
        }
    },
}