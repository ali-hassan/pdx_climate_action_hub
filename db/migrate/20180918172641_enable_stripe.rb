class EnableStripe < ActiveRecord::Migration[5.1]
  def up
    unless PaymentSettings.all.collect(&:payment_gateway).include?("stripe")
      TransactionService::API::Api.settings.provision(community_id: 1, payment_gateway: :stripe, payment_process: :preauthorize, active: true)
    end
  end

  def down
    stripe_enabled = PaymentSettings.find_by_payment_gateway("stripe").present?
    
    if stripe_enabled
      PaymentSettings.find_by_payment_gateway("stripe").destroy
    end
  end
end
