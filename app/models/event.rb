# == Schema Information
#
# Table name: events
#
#  id              :integer          not null, primary key
#  start_at        :datetime
#  end_at          :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  listing_id      :integer
#  start_at_time   :time
#  end_at_time     :time
#  event_rule_hash :text(65535)
#
# Indexes
#
#  index_listing_id  (listing_id)
#

class Event < ActiveRecord::Base
  attr_accessible :start_at, :end_at, :start_at_time, :end_at_time, :event_rule_hash
  belongs_to :listing

  validates :start_at, presence: true
  #validates :end_at, presence: true
  
  #validates_date :end_at, on_or_after: :start_at

  default_scope {order('start_at DESC')}

  after_save :set_listing_delta_flag
  after_destroy :set_listing_delta_flag

  private

  def set_listing_delta_flag
    if listing.delta != true
      listing.delta = true
      listing.save
    end
  end

  scope :current, lambda{ where(['end_at > ?', Time.now]) }

end