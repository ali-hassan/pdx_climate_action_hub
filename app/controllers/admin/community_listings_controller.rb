class Admin::CommunityListingsController < Admin::AdminBaseController

  def index
    @selected_left_navi_link = "listings"
    objects = params[:q].present? ? search_for_title : resource_scope
    @listings = objects.order("#{sort_column} #{sort_direction}")
                    .paginate(:page => params[:page], :per_page => 30)
  end

  private

  def resource_scope
    @current_community.listings.exist.includes(:author, :category)
  end

  def search_for_title
    @current_community.listings.where("title LIKE (?) OR description LIKE (?)", "%#{params[:q]}%", "%#{params[:q]}%").includes(:author, :category)
  end

  def sort_column
    case params[:sort]
    when 'started'
      'listings.created_at'
    when 'updated', nil
      'listings.updated_at'
    end
  end

  def sort_direction
    params[:direction] == 'asc' ? 'asc' : 'desc'
  end
end
